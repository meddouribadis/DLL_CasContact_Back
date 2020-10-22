const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const signalementService = require('./signalement.service');

// Routes (sécurisé par token)
router.post('/', authorize(), signalementSchema, createSignalement);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/byName/:name', authorize(), getByName)
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

// Schema Validation //
function signalementSchema(req, res, next) {
    const schema = Joi.object({
        dateDebut: Joi.string().required(),
        dateFin: Joi.string().required(),
        id_user: Joi.string().required(),
        isCasContact: Joi.boolean().required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        dateDebut: Joi.string().required(),
        dateFin: Joi.string().required(),
        id_user: Joi.string().required(),
        isCasContact: Joi.boolean().empty('')
    });
    validateRequest(req, next, schema);
}

// Actions //
function createSignalement(req, res, next) {
    signalementService.create(req.body)
        .then((signalement) => res.status(201).json({
            id: signalement.id,
            message: 'Signalement created successfully'
        }))
        .catch(next);
}

function update(req, res, next) {
    signalementService.update(req.params.id, req.body)
        .then(signalement => res.json(signalement))
        .catch(next);
}

function _delete(req, res, next) {
    classeService.delete(req.params.id)
        .then(() => res.json({ message: 'Classe deleted successfully' }))
        .catch(next);
}

// Getters //
function getAll(req, res, next) {
    classeService.getAll()
        .then(classes => res.json(classes))
        .catch(next);
}

function getById(req, res, next) {
    classeService.getById(req.params.id)
        .then(classe => res.json(classe))
        .catch(next);
}

function getByName(req, res, next) {
    classeService.getByName(req.params.name)
        .then(classe => res.json(classe))
        .catch(next);
}

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const classeService = require('./classe.service');

// Routes (sécurisé par token)
router.post('/', authorize(), classeSchema, createClasse);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

// Schema Validation //
function classeSchema(req, res, next) {
    const schema = Joi.object({
        nom: Joi.string().required(),
        code: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        nom: Joi.string().empty(''),
        code: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}

// Actions //
function createClasse(req, res, next) {
    classeService.create(req.body)
        .then((classe) => res.status(201).json({
            id: classe.id,
            message: 'Classe created successfully'
        }))
        .catch(next);
}

function update(req, res, next) {
    classeService.update(req.params.id, req.body)
        .then(classe => res.json(classe))
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

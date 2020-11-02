const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const uploadFileMiddleware = require('_middleware/upload');
const documentService = require('./documents.service');
const Role = require('_helpers/role');

// Routes
router.post("/upload", upload);
router.get("/files", authorize(), getListFiles);
router.get("/files/:name", authorize(), download);

module.exports = router;

async function upload(req, res, next) {

    try {
        await uploadFileMiddleware(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        documentService.create(req.body)
            .then((classe) => res.status(201).json({
                id: classe.id,
                message: 'Document created successfully'
            }))
            .catch(next);

    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file}. ${err}`,
        });
    }
}

function getListFiles(req, res, next) {
    const schema = Joi.object({
        nom: Joi.string().required(),
        code: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function download(req, res, next) {
    console.log("Welcome back");
}

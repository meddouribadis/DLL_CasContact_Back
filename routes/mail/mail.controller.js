const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const Role = require('_helpers/role');
const mailService = require('./mail.service');

router.post("/", sendMail);
router.post("/signalement", sendSignalementMail);

module.exports = router;

function sendMail(req, res, next) {
    mailService.sendWelcomeMail(req.body)
        .then(() => res.json({ message: 'Mail envoyé avec succès' }))
        .catch(next);
}

function sendSignalementMail(req, res, next) {
    mailService.sendSignalementMail(req.body)
        .then(() => res.json({ message: 'Mail Signalement envoyé avec succès' }))
        .catch(next);
}

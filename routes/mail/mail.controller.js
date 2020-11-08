const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const Role = require('_helpers/role');
const mailService = require('./mail.service');


router.post("/", sendMail);
module.exports = router;

function sendMail(req, res, next) {
    mailService.sendWelcomeMail(req.body)
        .then(() => res.json({ message: 'Mail envoyé avec succès' }))
        .catch(next);
}
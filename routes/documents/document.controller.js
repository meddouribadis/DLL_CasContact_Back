const express = require('express');
const router = express.Router();
const Joi = require('joi');
const fs = require('fs');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const uploadFileMiddleware = require('_middleware/upload');
const encryptMiddleware = require('_middleware/encrypt');
const documentService = require('./documents.service');
const Role = require('_helpers/role');
const path = require("path");
const stream = require("stream");

// Routes
router.get("/types", authorize(), getDocumentTypes);
router.post("/upload", authorize(), upload);
router.get("/files", authorize(), getListFiles);
router.get("/files/:name", download);
router.delete('/:id', authorize([Role.Teacher, Role.Admin]), _delete);

module.exports = router;

const secret = {
    iv: Buffer.from('efb2da92cff888c9c295dc4ee682789c', 'hex'),
    key: Buffer.from('6245cb9b8dab1c1630bb3283063f963574d612ca6ec60bc8a5d1e07ddd3f7c53', 'hex')
}

async function upload(req, res, next) {
    try {
        await uploadFileMiddleware(req, res);

        if (req.file == undefined) {
            return res.status(400).send({message: "Please upload a file!"});
        }

        console.log("req.file: ", req.file);

        let buffer = fs.readFileSync(req.file.path);
        encryptMiddleware.saveEncryptedFile(buffer, req.file.path, secret.key, secret.iv).then((data, err) => {
            if (err) {
                console.log("error", err);
                throw(err);
            }
            console.log("resolve", data);
            fs.unlinkSync(req.file.path);
            documentService.create(req.body, data.replace(/^.*[\\\/]/, ''))
                .then((document) => res.status(201).json({
                    id: document.id,
                    message: 'Document created successfully'
                }))
                .catch(next);
        });

    } catch (err) {
        res.status(500).send({
            message: `Impossible d'uploader le fichier: ${req.file}. ${err}`,
        });
    }
}

function getListFiles(req, res, next) {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Impossible de scanner les fichiers!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: 'http://localhost:4040/' + file,
            });
        });

        res.status(200).send(fileInfos);
    });
}

function download(req, res, next) {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

    let buffer = encryptMiddleware.getEncryptedFile(path.join(directoryPath, fileName), secret.key, secret.iv);
    const readStream = new stream.PassThrough();
    readStream.end(buffer);

    res.writeHead(200, {
        "Content-disposition": "attachment; filename=" + req.params.name,
        "Content-Type": "application/octet-stream",
        "Content-Length": buffer.length
    });
    res.end(buffer);
}

function getDocumentTypes(req, res, next) {
    documentService.getAllDocumentTypes()
        .then(types => res.json(types))
        .catch(next);
}

function _delete(req, res, next) {
    documentService.delete(req.params.id)
        .then(() => res.json({ message: 'Document deleted successfully' }))
        .catch(next);
}

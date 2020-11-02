const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const crypto = require('crypto');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        let customFileName = crypto.randomBytes(18).toString('hex')
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, customFileName + Date.now()+ '.' +extension)
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

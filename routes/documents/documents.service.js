const Sequelize = require('sequelize');

const db = require('models/');

module.exports = {
    create,
    update,
    getAllDocumentTypes,
    delete: _delete
};

async function create(params, filename) {
    params.filename = filename;
    return db.Document.create(params);
}

async function update(id, params) {
    // TO DO
}

async function getAllDocumentTypes() {
    return await db.Ref_Doc_Type.findAll();
}

async function _delete(id, params) {
    // TO DO
}

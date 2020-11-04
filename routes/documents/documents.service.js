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

async function _delete(id) {
    const document = await getDocument(id);
    await document.destroy();
}

// helper functions

async function getDocument(id) {
    const document = await db.Document.findByPk(id);
    if (!document) throw 'Document not found';
    return document;
}

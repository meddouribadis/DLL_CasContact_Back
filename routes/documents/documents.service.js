const Sequelize = require('sequelize');

const db = require('models/');
const Op = Sequelize.Op;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(params) {
    return db.Document.create(params);
}

async function update(id, params) {
    // TO DO
}

async function _delete(id, params) {
    // TO DO
}

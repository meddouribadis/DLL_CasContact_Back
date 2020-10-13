const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('models/');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function create(params) {
    if (await db.Classe.findOne({ where: { nom: params.nom } })) {
        throw 'Classe "' + params.nom + '" existe deja';
    }

    return db.Classe.create(params);
}

async function update(id, params) {
    const classe = await getClasse(id);

    const classeNomChanged = params.nom && classe.nom !== params.nom;
    if (classeNomChanged && await db.Classe.findOne({ where: { nom: params.nom } })) {
        throw 'Classe "' + params.title + '" existe déjà';
    }

    Object.assign(classe, params);
    await classe.save();

    return classe.get();
}

async function _delete(id) {
    const classe = await getClasse(id);
    await classe.destroy();
}

// Getter

async function getAll() {
    return await db.Classe.findAll();
}

async function getById(id) {
    return await getClasse(id);
}

async function getClasse(id) {
    const classe = await db.Classe.findByPk(id);
    if (!classe) throw 'Classe non trouvée';
    return classe;
}

const db = require('models/');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function create(params) {
    if (await db.Infection.findOne({ where: { id_user: params.id_user } })) {
        throw 'Une infection pour la personne "' + params.id_user + '" existe deja';
    }

    return db.Infection.create(params);
}

async function update(id, params) {
    // TO DO
}

async function _delete(id) {
    const infection = await getInfection(id);
    await infection.destroy();
}

// Getter
async function getAll() {
    return await db.Infection.findAll();
}

async function getById(id) {
    return await getInfection(id);
}

async function getInfection(id) {
    const infection = await db.Infection.findByPk(id, {
        include: [{
            model: db.User
        }]
    });
    if (!infection) throw 'Classe non trouvée';
    return infection;
}

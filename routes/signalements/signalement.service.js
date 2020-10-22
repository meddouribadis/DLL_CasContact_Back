const db = require('models/');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function create(params) {
    /*if (await db.Signalement.findOne({ where: { id_user: params.id_user } })) {
        throw 'Une signalement pour la personne "' + params.id_user + '" existe deja';
    }*/

    return db.Signalement.create(params);
}

async function update(id, params) {
    // TO DO
}

async function _delete(id) {
    const signalement = await getSignalement(id);
    await signalement.destroy();
}

// Getter
async function getAll() {
    return await db.Signalement.findAll();
}

async function getById(id) {
    return await getSignalement(id);
}

async function getSignalement(id) {
    const signalement = await db.Signalement.findByPk(id, {
        include: [{
            model: db.User
        }]
    });
    if (!signalement) throw 'Classe non trouvée';
    return signalement;
}

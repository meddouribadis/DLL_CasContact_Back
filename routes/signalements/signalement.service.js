const Sequelize = require('sequelize');

const db = require('models/');
const Op = Sequelize.Op;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function create(params) {

    let dateDebut = new Date(params.dateDebut);
    let dateFin = new Date(params.dateFin);

    if (await db.Signalement.findOne({
        where: {
            id_user: params.id_user,
            dateDebut: {
                [Op.lt]: new Date(dateFin.setDate(dateFin.getDate()+1)),
                [Op.gt]: new Date(dateDebut.setDate(dateDebut.getDate()-1))
            }
        }
    })) {
        throw 'Un signalement pour la personne "' + params.id_user + '" existe deja';
    }

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

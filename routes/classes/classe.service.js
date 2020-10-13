const db = require('models/');

module.exports = {
    getAll,
    getById,
    getByName,
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

async function getByName(slug) {
    const classe = await db.Classe.findOne({where: {nom: slug}});
    if (!classe) throw 'Classe non trouvée';
    return classe;
}

async function getClasse(id) {
    const classe = await db.Classe.findByPk(id, {
        include: [{
            model: db.User,
            as: 'students'
        }]
    });
    if (!classe) throw 'Classe non trouvée';
    return classe;
}

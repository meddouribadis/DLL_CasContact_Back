'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Signalement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Signalement.belongsTo(models.User, {
                foreignKey: 'id_user',
            });
        }
    };
    Signalement.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        dateDebut: { type: DataTypes.DATE, allowNull: false },
        dateFin: { type: DataTypes.DATE, allowNull: false },
        isCasContact: { type: DataTypes.BOOLEAN, allowNull: false },
        createdAt: { allowNull: false, type: DataTypes.DATE },
        updatedAt: { allowNull: false, type: DataTypes.DATE }
    }, {
        sequelize,
        modelName: 'Signalement',
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    });
    return Signalement;
};

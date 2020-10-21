'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Infection extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Infection.belongsTo(models.User, {
                foreignKey: 'id_user',
            });
        }
    };
    Infection.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        dateDebut: { type: DataTypes.DATE, allowNull: false },
        dateFin: { type: DataTypes.DATE, allowNull: false },
        createdAt: { allowNull: false, type: DataTypes.DATE },
        updatedAt: { allowNull: false, type: DataTypes.DATE }
    }, {
        sequelize,
        modelName: 'Infection',
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    });
    return Infection;
};

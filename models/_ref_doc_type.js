'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ref_Doc_Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    Ref_Doc_Type.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        code: { allowNull: false, type: DataTypes.STRING },
        nom: { allowNull: false, type: DataTypes.STRING },
        isAvailable: { allowNull: false, type: DataTypes.BOOLEAN },
    }, {
        sequelize,
        modelName: 'Ref_Doc_Type',
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    });
    return Ref_Doc_Type;
};

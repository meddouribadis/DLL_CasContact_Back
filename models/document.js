'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Document extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Document.belongsTo(models.User);
            Document.belongsTo(models.Signalement);
        }
    };
    Document.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        filename: { allowNull: false, type: DataTypes.STRING },
        createdAt: { allowNull: false, type: DataTypes.DATE },
        updatedAt: { allowNull: false, type: DataTypes.DATE }
    }, {
        sequelize,
        modelName: 'Document',
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    });
    return Document;
};

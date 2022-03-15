"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Recepie extends sequelize_1.Model {
        static associate(models) {
            Recepie.hasMany(models.RecepieComment);
            Recepie.belongsTo(models.User);
            Recepie.belongsToMany(models.User, {
                as: "RecepieUserLike",
                foreignKey: "RecepieId",
                through: "RecepieLike",
            });
            Recepie.belongsToMany(models.User, {
                as: "RecepieUserSave",
                foreignKey: "RecepieId",
                through: "RecepieSave",
            });
            Recepie.belongsToMany(models.Cookbook, {
                as: "RecepieCookbook",
                foreignKey: "RecepieId",
                through: "RecepieInCookbook",
            });
        }
    }
    Recepie.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        cookingTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        view: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Recepie",
    });
    return Recepie;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cookbook extends sequelize_1.Model {
        static associate(models) {
            Cookbook.belongsTo(models.User);
            Cookbook.hasMany(models.CookbookComment);
            Cookbook.belongsToMany(models.User, {
                as: "CookbookUserLike",
                foreignKey: "Cookbookid",
                through: "CookbookLike",
            });
            Cookbook.belongsToMany(models.User, {
                as: "CookbookUserSave",
                foreignKey: "Cookbookid",
                through: "CookbookSave",
            });
            Cookbook.belongsToMany(models.Recepie, {
                as: "CookbookRecepie",
                foreignKey: "Cookbookid",
                through: "RecepieInCookbook",
            });
        }
    }
    Cookbook.init({
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
        isVegatarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isWithoutMilk: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isWithouEggs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        view: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Cookbook",
    });
    return Cookbook;
};

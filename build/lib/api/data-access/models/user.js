"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.hasMany(models.Recepie);
            User.belongsToMany(models.Recepie, {
                as: "UserRecepiLike",
                foreignKey: "UserId",
                through: "RecepieLike",
            });
            User.belongsToMany(models.Recepie, {
                as: "UserRecepieSave",
                foreignKey: "UserId",
                through: "RecepieSave",
            });
            User.hasMany(models.RecepieComment);
            User.hasMany(models.Cookbook);
            User.belongsToMany(models.Cookbook, {
                as: "UserCookbookLike",
                foreignKey: "UserId",
                through: "CookbookLike",
            });
            User.belongsToMany(models.Cookbook, {
                as: "UserCookbookSave",
                foreignKey: "UserId",
                through: "CookbookSave",
            });
            User.hasMany(models.CookbookComment);
        }
    }
    User.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userText: {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "User",
    });
    return User;
};

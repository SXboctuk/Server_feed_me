"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CookbookComment extends sequelize_1.Model {
        static associate(models) {
            CookbookComment.belongsTo(models.Cookbook);
            CookbookComment.belongsTo(models.User);
        }
    }
    CookbookComment.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "CookbookComment",
    });
    return CookbookComment;
};

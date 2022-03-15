"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class RecepieComment extends sequelize_1.Model {
        static associate(models) {
            RecepieComment.belongsTo(models.Recepie);
            RecepieComment.belongsTo(models.User);
        }
    }
    RecepieComment.init({
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
        modelName: "RecepieComment",
    });
    return RecepieComment;
};

"use strict";

import { Model, UUIDV4 } from "sequelize";

interface CookbookAttributes {
	id: string;
	imagePath: string;
	title: string;
	description: string;
	isVegatarian: string;
	isWithoutMilk: string;
	isWithouEggs: string;
	view: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cookbook
        extends Model<CookbookAttributes>
        implements CookbookAttributes
    {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

        id!: string;
        imagePath!: string;
        title!: string;
        description!: string;
        isVegatarian!: string;
        isWithoutMilk!: string;
        isWithouEggs!: string;
        view!: number;
        static associate(models: any) {
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
    Cookbook.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
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
        },
        {
            sequelize,
            modelName: "Cookbook",
        }
    );
    return Cookbook;
};

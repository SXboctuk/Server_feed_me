"use strict";

import { Model, UUIDV4 } from "sequelize";

interface CookbookAttributes {
	id: string;
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
		title!: string;
		description!: string;
		isVegatarian!: string;
		isWithoutMilk!: string;
		isWithouEggs!: string;
		view!: number;
		static associate(models: any) {
			Cookbook.belongsTo(models.User);
			Cookbook.belongsToMany(models.User, {
				as: "CookbookUserLike",
				foreignKey: "cookbookid",
				through: "likeCookbook",
			});
			Cookbook.belongsToMany(models.User, {
				as: "CookbookUserSave",
				foreignKey: "cookbookid",
				through: "saveCookbook",
			});
			Cookbook.belongsToMany(models.Recepie, {
				as: "CookbookRecepie",
				foreignKey: "cookbookid",
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
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
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

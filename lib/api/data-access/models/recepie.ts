"use strict";

import { Model, UUIDV4 } from "sequelize";

interface RecepieAttributes {
	id: string;
	imagePath: string;
	title: string;
	description: string;
	cookingTime: number;
	ingredients: string;
	directions: string;
	view: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Recepie
		extends Model<RecepieAttributes>
		implements RecepieAttributes
	{
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		imagePath!: string;
		title!: string;
		ingredients!: string;
		directions!: string;
		description!: string;
		cookingTime!: number;
		view!: number;
		static associate(models: any) {
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
	Recepie.init(
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
		},
		{
			sequelize,
			modelName: "Recepie",
		}
	);
	return Recepie;
};

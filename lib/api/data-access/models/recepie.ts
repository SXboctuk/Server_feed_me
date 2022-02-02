"use strict";

import { Model, UUIDV4 } from "sequelize";

interface RecepieAttributes {
	id: string;
	imagePath: string;
	title: string;
	description: string;
	cookingTime: number;
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
		description!: string;
		cookingTime!: number;
		view!: number;
		static associate(models: any) {
			Recepie.hasMany(models.Direction);
			Recepie.hasMany(models.Ingredient);
			Recepie.hasMany(models.RecepieComment);

			Recepie.belongsTo(models.User);
			Recepie.belongsToMany(models.User, {
				as: "RecepieUserLike",
				foreignKey: "recepieid",
				through: "likeRecepie",
			});
			Recepie.belongsToMany(models.User, {
				as: "RecepieUserSave",
				foreignKey: "recepieid",
				through: "saveRecepie",
			});

			Recepie.belongsToMany(models.Cookbook, {
				as: "RecepieCookbook",
				foreignKey: "recepieid",
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
				type: DataTypes.STRING,
				allowNull: false,
			},
			cookingTime: {
				type: DataTypes.INTEGER,
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

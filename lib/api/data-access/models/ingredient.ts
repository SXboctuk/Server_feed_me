"use strict";

import { Model } from "sequelize";

interface IngredientAttributes {
	id: string;
	text: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Ingredient
		extends Model<IngredientAttributes>
		implements IngredientAttributes
	{
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		text!: string;
		static associate(models: any) {
			Ingredient.belongsTo(models.Recepie);
		}
	}
	Ingredient.init(
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
			},
			text: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Ingredient",
		}
	);
	return Ingredient;
};

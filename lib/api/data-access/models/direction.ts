"use strict";

import { Model, UUIDV4 } from "sequelize";

interface DirectionAttributes {
	id: string;
	text: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Direction
		extends Model<DirectionAttributes>
		implements DirectionAttributes
	{
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		text!: string;
		static associate(models: any) {
			Direction.belongsTo(models.Recepie);
		}
	}
	Direction.init(
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
			modelName: "Direction",
		}
	);
	return Direction;
};

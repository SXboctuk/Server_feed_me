"use strict";

import { Model, UUIDV4 } from "sequelize";

interface RecepieCommentAttributes {
	id: string;
	text: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class RecepieComment
		extends Model<RecepieCommentAttributes>
		implements RecepieCommentAttributes
	{
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		text!: string;
		static associate(models: any) {
			RecepieComment.belongsTo(models.Recepie);
			RecepieComment.belongsTo(models.User);
		}
	}
	RecepieComment.init(
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
			},
			text: {
				type: DataTypes.STRING(256),
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "RecepieComment",
		}
	);
	return RecepieComment;
};

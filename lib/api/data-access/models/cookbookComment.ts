"use strict";

import { Model, UUIDV4 } from "sequelize";

interface CookbookCommentAttributes {
	id: string;
	text: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class CookbookComment
		extends Model<CookbookCommentAttributes>
		implements CookbookCommentAttributes
	{
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		text!: string;
		static associate(models: any) {
			CookbookComment.belongsTo(models.Cookbook);
			CookbookComment.belongsTo(models.User);
		}
	}
	CookbookComment.init(
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
			modelName: "CookbookComment",
		}
	);
	return CookbookComment;
};

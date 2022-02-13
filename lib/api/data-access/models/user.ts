"use strict";

import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
	id: string;
	name: string;
	email: string;
	passwordHash: string;
	imagePath: string;
	userText: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class User extends Model<UserAttributes> implements UserAttributes {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		id!: string;
		imagePath!: string;
		name!: string;
		email!: string;
		userText!: string;
		passwordHash!: string;
		static associate(models: any) {
			User.hasMany(models.Recepie);
			User.belongsToMany(models.Recepie, {
				as: "UserRecepiLike",
				foreignKey: "UserId",
				through: "RecepieLike",
			});
			User.belongsToMany(models.Recepie, {
				as: "UserRecepieSave",
				foreignKey: "UserId",
				through: "RecepieSave",
			});
			User.hasMany(models.RecepieComment);

			User.hasMany(models.Cookbook);
			User.belongsToMany(models.Cookbook, {
				as: "UserCookbookLike",
				foreignKey: "UserId",
				through: "CookbookLike",
			});
			User.belongsToMany(models.Cookbook, {
				as: "UserCookbookSave",
				foreignKey: "UserId",
				through: "CookbookSave",
			});
			User.hasMany(models.CookbookComment);
		}
	}
	User.init(
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
			},
			imagePath: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			userText: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			passwordHash: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};

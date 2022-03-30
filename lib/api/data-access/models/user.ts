'use strict';

import {
    Association,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManySetAssociationsMixin,
    CreationOptional,
    DataTypes,
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManySetAssociationsMixin,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
    Sequelize,
    UUIDV4,
} from 'sequelize';
import { Cookbook } from './cookbook';
import { CookbookComment } from './cookbookComment';
import { Recepie } from './recepie';
import { RecepieComment } from './recepieComment';

export interface UserAttributes {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    imagePath: string;
    userText: string;
}

// module.exports = (sequelize: any, DataTypes: any) => {
export class User
    extends Model<InferAttributes<User>, InferCreationAttributes<User>>
    implements UserAttributes
{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    declare id: string;
    declare imagePath: string;
    declare name: string;
    declare email: string;
    declare userText: string;
    declare passwordHash: string;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initialize(sequelize: Sequelize) {
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
                    type: DataTypes.STRING(512),
                    allowNull: false,
                },
                passwordHash: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            {
                sequelize,
                modelName: 'User',
            },
        );
        return User;
    }
    // User.hasMany(models.Recepie);
    declare getRecepies: HasManyGetAssociationsMixin<Recepie>;
    declare addRecepie: HasManyAddAssociationMixin<Recepie, number>;
    declare addRecpeies: HasManyAddAssociationsMixin<Recepie, number>;
    declare setRecpeies: HasManySetAssociationsMixin<Recepie, number>;
    declare removeRecepie: HasManyRemoveAssociationMixin<Recepie, number>;
    declare removeRecepies: HasManyRemoveAssociationsMixin<Recepie, number>;
    declare hasRecepie: HasManyHasAssociationMixin<Recepie, number>;
    declare hasRecepies: HasManyHasAssociationsMixin<Recepie, number>;
    declare countRecepies: HasManyCountAssociationsMixin;
    declare createRecepie: HasManyCreateAssociationMixin<Recepie>;

    // User.belongsToMany(models.Recepie, { as: 'UserRecepiLike', foreignKey: 'UserId', through: 'RecepieLike',});
    declare getUserRecepiLikes: BelongsToManyGetAssociationsMixin<Recepie>;
    declare setUserRecepiLikes: BelongsToManySetAssociationsMixin<
        Recepie,
        number
    >;
    declare addUserRecepiLikes: BelongsToManyAddAssociationsMixin<
        Recepie,
        number
    >;
    declare addUserRecepiLike: BelongsToManyAddAssociationMixin<
        Recepie,
        number
    >;
    declare createUserRecepiLike: BelongsToManyCreateAssociationMixin<Recepie>;
    declare removeUserRecepiLike: BelongsToManyRemoveAssociationMixin<
        Recepie,
        number
    >;
    declare removeUserRecepiLikes: BelongsToManyRemoveAssociationsMixin<
        Recepie,
        number
    >;
    declare hasUserRecepiLike: BelongsToManyHasAssociationMixin<
        Recepie,
        number
    >;
    declare hasUserRecepiLikes: BelongsToManyHasAssociationsMixin<
        Recepie,
        number
    >;
    declare countUserRecepiLikes: BelongsToManyCountAssociationsMixin;

    //  User.belongsToMany(models.Recepie, {as: 'UserRecepieSave', foreignKey: 'UserId', through: 'RecepieSave',});
    declare getUserRecepieSaves: BelongsToManyGetAssociationsMixin<Recepie>;
    declare setUserRecepieSaves: BelongsToManySetAssociationsMixin<
        Recepie,
        number
    >;
    declare addUserRecepieSaves: BelongsToManyAddAssociationsMixin<
        Recepie,
        number
    >;
    declare addUserRecepieSave: BelongsToManyAddAssociationMixin<
        Recepie,
        number
    >;
    declare createUserRecepieSave: BelongsToManyCreateAssociationMixin<Recepie>;
    declare removeUserRecepieSave: BelongsToManyRemoveAssociationMixin<
        Recepie,
        number
    >;
    declare removeUserRecepieSaves: BelongsToManyRemoveAssociationsMixin<
        Recepie,
        number
    >;
    declare hasUserRecepieSave: BelongsToManyHasAssociationMixin<
        Recepie,
        number
    >;
    declare hasUserRecepieSaves: BelongsToManyHasAssociationsMixin<
        Recepie,
        number
    >;
    declare countUserRecepieSaves: BelongsToManyCountAssociationsMixin;

    // User.hasMany(models.RecepieComment);
    declare getRecepieComments: HasManyGetAssociationsMixin<Recepie>;
    declare addRecepieComment: HasManyAddAssociationMixin<Recepie, number>;
    declare addRecepieComments: HasManyAddAssociationsMixin<Recepie, number>;
    declare setRecepieComments: HasManySetAssociationsMixin<Recepie, number>;
    declare removeRecepieComment: HasManyRemoveAssociationMixin<
        Recepie,
        number
    >;
    declare removeRecepieComments: HasManyRemoveAssociationsMixin<
        Recepie,
        number
    >;
    declare hasRecepieComment: HasManyHasAssociationMixin<Recepie, number>;
    declare hasRecepieComments: HasManyHasAssociationsMixin<Recepie, number>;
    declare countRecepieComments: HasManyCountAssociationsMixin;
    declare createRecepieComment: HasManyCreateAssociationMixin<Recepie>;

    // User.belongsToMany(models.Cookbook, {as: 'UserCookbookLike',foreignKey: 'UserId',through: 'CookbookLike',});
    declare getUserCookbookLikes: BelongsToManyGetAssociationsMixin<Cookbook>;
    declare setUserCookbookLikes: BelongsToManySetAssociationsMixin<
        Cookbook,
        number
    >;
    declare addUserCookbookLikes: BelongsToManyAddAssociationsMixin<
        Cookbook,
        number
    >;
    declare addUserCookbookLike: BelongsToManyAddAssociationMixin<
        Cookbook,
        number
    >;
    declare createUserCookbookLike: BelongsToManyCreateAssociationMixin<Cookbook>;
    declare removeUserCookbookLike: BelongsToManyRemoveAssociationMixin<
        Cookbook,
        number
    >;
    declare removeUserCookbookLikes: BelongsToManyRemoveAssociationsMixin<
        Cookbook,
        number
    >;
    declare hasUserCookbookLike: BelongsToManyHasAssociationMixin<
        Cookbook,
        number
    >;
    declare hasUserCookbookLikes: BelongsToManyHasAssociationsMixin<
        Cookbook,
        number
    >;
    declare countUserCookbookLikes: BelongsToManyCountAssociationsMixin;

    // User.belongsToMany(models.Cookbook, {as: 'UserCookbookSave',foreignKey: 'UserId',through: 'CookbookSave',});
    declare getUserCookbookSaves: BelongsToManyGetAssociationsMixin<Cookbook>;
    declare setUserCookbookSaves: BelongsToManySetAssociationsMixin<
        Cookbook,
        number
    >;
    declare addUserCookbookSaves: BelongsToManyAddAssociationsMixin<
        Cookbook,
        number
    >;
    declare addUserCookbookSave: BelongsToManyAddAssociationMixin<
        Cookbook,
        number
    >;
    declare createUserCookbookSave: BelongsToManyCreateAssociationMixin<Cookbook>;
    declare removeUserCookbookSave: BelongsToManyRemoveAssociationMixin<
        Cookbook,
        number
    >;
    declare removeUserCookbookSaves: BelongsToManyRemoveAssociationsMixin<
        Cookbook,
        number
    >;
    declare hasUserCookbookSave: BelongsToManyHasAssociationMixin<
        Cookbook,
        number
    >;
    declare hasUserCookbookSaves: BelongsToManyHasAssociationsMixin<
        Cookbook,
        number
    >;
    declare countUserCookbookSaves: BelongsToManyCountAssociationsMixin;

    // User.hasMany(models.CookbookComment);
    declare getCookbookComments: HasManyGetAssociationsMixin<Cookbook>;
    declare addCookbookComment: HasManyAddAssociationMixin<Cookbook, number>;
    declare addCookbookComments: HasManyAddAssociationsMixin<Cookbook, number>;
    declare setCookbookComments: HasManySetAssociationsMixin<Cookbook, number>;
    declare removeCookbookComment: HasManyRemoveAssociationMixin<
        Cookbook,
        number
    >;
    declare removeCookbookComments: HasManyRemoveAssociationsMixin<
        Cookbook,
        number
    >;
    declare hasCookbookComment: HasManyHasAssociationMixin<Cookbook, number>;
    declare hasCookbookComments: HasManyHasAssociationsMixin<Cookbook, number>;
    declare countCookbookComments: HasManyCountAssociationsMixin;
    declare createCookbookComment: HasManyCreateAssociationMixin<Cookbook>;

    declare static assoctiations: {
        recepies: Association<User, Recepie>;
        recepieLike: Association<User, Recepie>;
        recepieSave: Association<User, Recepie>;

        recepieComment: Association<User, RecepieComment>;

        cookbooks: Association<User, Cookbook>;
        cookbookLikes: Association<User, Cookbook>;
        cookbookSaves: Association<User, Cookbook>;

        cookbookComments: Association<User, CookbookComment>;
    };
    static associate(models: any) {
        User.hasMany(models.Recepie);

        User.belongsToMany(models.Recepie, {
            as: 'UserRecepiLike',
            foreignKey: 'UserId',
            through: 'RecepieLike',
        });
        User.belongsToMany(models.Recepie, {
            as: 'UserRecepieSave',
            foreignKey: 'UserId',
            through: 'RecepieSave',
        });

        User.hasMany(models.RecepieComment);

        User.hasMany(models.Cookbook);

        User.belongsToMany(models.Cookbook, {
            as: 'UserCookbookLike',
            foreignKey: 'UserId',
            through: 'CookbookLike',
        });
        User.belongsToMany(models.Cookbook, {
            as: 'UserCookbookSave',
            foreignKey: 'UserId',
            through: 'CookbookSave',
        });
        User.hasMany(models.CookbookComment);
    }
}

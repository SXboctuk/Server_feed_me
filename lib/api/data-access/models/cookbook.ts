'use strict';

import {
    Association,
    BelongsToCreateAssociationMixin,
    BelongsToGetAssociationMixin,
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
    BelongsToSetAssociationMixin,
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
    Sequelize,
    UUIDV4,
} from 'sequelize';
import { CookbookComment } from './cookbookComment';
import { Recepie } from './recepie';
import { User } from './user';

interface CookbookAttributes {
    id: string;
    imagePath: string;
    title: string;
    description: string;
    isVegatarian: boolean;
    isWithoutMilk: boolean;
    isWithouEggs: boolean;
    view: number;
}

// module.exports = (sequelize: any, DataTypes: any) => {
export class Cookbook
    extends Model<InferAttributes<Cookbook>, InferCreationAttributes<Cookbook>>
    implements CookbookAttributes
{
    declare id: string;
    declare imagePath: string;
    declare title: string;
    declare description: string;
    declare isVegatarian: boolean;
    declare isWithoutMilk: boolean;
    declare isWithouEggs: boolean;
    declare view: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initialize(sequelize: Sequelize) {
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
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            {
                sequelize,
                modelName: 'Cookbook',
            },
        );
        return Cookbook;
    }

    // Cookbook.belongsTo(models.User);
    declare getUser: BelongsToGetAssociationMixin<User>;
    declare setUser: BelongsToSetAssociationMixin<User, number>;
    declare createUser: BelongsToCreateAssociationMixin<User>;

    // Cookbook.hasMany(models.CookbookComment);
    declare getCookbookComments: HasManyGetAssociationsMixin<CookbookComment>;
    declare addCookbookComment: HasManyAddAssociationMixin<
        CookbookComment,
        number
    >;
    declare addCookbookComments: HasManyAddAssociationsMixin<
        CookbookComment,
        number
    >;
    declare setCookbookComments: HasManySetAssociationsMixin<
        CookbookComment,
        number
    >;
    declare removeCookbookComment: HasManyRemoveAssociationMixin<
        CookbookComment,
        number
    >;
    declare removeCookbookComments: HasManyRemoveAssociationsMixin<
        CookbookComment,
        number
    >;
    declare hasCookbookComment: HasManyHasAssociationMixin<
        CookbookComment,
        number
    >;
    declare hasCookbookComments: HasManyHasAssociationsMixin<
        CookbookComment,
        number
    >;
    declare countCookbookComment: HasManyCountAssociationsMixin;
    declare createCookbookComment: HasManyCreateAssociationMixin<CookbookComment>;

    //Cookbook.belongsToMany(models.User, {as: 'CookbookUserLike',foreignKey: 'Cookbookid',through: 'CookbookLike',});
    declare getCookbookUserLikes: BelongsToManyGetAssociationsMixin<User>;
    declare setCookbookUserLikes: BelongsToManySetAssociationsMixin<
        User,
        number
    >;
    declare addCookbookUserLikes: BelongsToManyAddAssociationsMixin<
        User,
        number
    >;
    declare addCookbookUserLike: BelongsToManyAddAssociationMixin<User, number>;
    declare createCookbookUserLike: BelongsToManyCreateAssociationMixin<User>;
    declare removeCookbookUserLike: BelongsToManyRemoveAssociationMixin<
        User,
        number
    >;
    declare removeCookbookUserLikes: BelongsToManyRemoveAssociationsMixin<
        User,
        number
    >;
    declare hasCookbookUserLike: BelongsToManyHasAssociationMixin<User, number>;
    declare hasCookbookUserLikes: BelongsToManyHasAssociationsMixin<
        User,
        number
    >;
    declare countCookbookUserLike: BelongsToManyCountAssociationsMixin;
    //Cookbook.belongsToMany(models.User, {as: 'CookbookUserSave',foreignKey: 'Cookbookid',through: 'CookbookSave',});
    declare getCookbookUserSaves: BelongsToManyGetAssociationsMixin<User>;
    declare setCookbookUserSaves: BelongsToManySetAssociationsMixin<
        User,
        number
    >;
    declare addCookbookUserSaves: BelongsToManyAddAssociationsMixin<
        User,
        number
    >;
    declare addCookbookUserSave: BelongsToManyAddAssociationMixin<User, number>;
    declare createCookbookUserSave: BelongsToManyCreateAssociationMixin<User>;
    declare removeCookbookUserSave: BelongsToManyRemoveAssociationMixin<
        User,
        number
    >;
    declare removeCookbookUserSaves: BelongsToManyRemoveAssociationsMixin<
        User,
        number
    >;
    declare hasCookbookUserSave: BelongsToManyHasAssociationMixin<User, number>;
    declare hasCookbookUserSaves: BelongsToManyHasAssociationsMixin<
        User,
        number
    >;
    declare countCookbookUserSave: BelongsToManyCountAssociationsMixin;

    //Cookbook.belongsToMany(models.Recepie, {as: 'CookbookRecepie',foreignKey: 'Cookbookid',through: 'RecepieInCookbook',});
    declare getCookbookRecepies: BelongsToManyGetAssociationsMixin<Recepie>;
    declare setCookbookRecepies: BelongsToManySetAssociationsMixin<
        Recepie,
        number
    >;
    declare addCookbookRecepies: BelongsToManyAddAssociationsMixin<
        Recepie,
        number
    >;
    declare addCookbookRecepie: BelongsToManyAddAssociationMixin<
        Recepie,
        number
    >;
    declare createCookbookRecepie: BelongsToManyCreateAssociationMixin<Recepie>;
    declare removeCookbookRecepie: BelongsToManyRemoveAssociationMixin<
        Recepie,
        number
    >;
    declare removeCookbookRecepies: BelongsToManyRemoveAssociationsMixin<
        Recepie,
        number
    >;
    declare hasCookbookRecepie: BelongsToManyHasAssociationMixin<
        Recepie,
        number
    >;
    declare hasCookbookRecepies: BelongsToManyHasAssociationsMixin<
        Recepie,
        number
    >;
    declare countCookbookRecepie: BelongsToManyCountAssociationsMixin;

    declare static assoctiations: {
        user: Association<Cookbook, User>;
        cookbookComments: Association<Cookbook, CookbookComment>;
        cookbookLikes: Association<Cookbook, User>;
        cookbookSaves: Association<Cookbook, User>;
        cookbookRecepies: Association<Cookbook, Recepie>;
    };

    static associate(models: any) {
        Cookbook.belongsTo(models.User);
        Cookbook.hasMany(models.CookbookComment);
        Cookbook.belongsToMany(models.User, {
            as: 'CookbookUserLike',
            foreignKey: 'Cookbookid',
            through: 'CookbookLike',
        });
        Cookbook.belongsToMany(models.User, {
            as: 'CookbookUserSave',
            foreignKey: 'Cookbookid',
            through: 'CookbookSave',
        });
        Cookbook.belongsToMany(models.Recepie, {
            as: 'CookbookRecepie',
            foreignKey: 'Cookbookid',
            through: 'RecepieInCookbook',
        });
    }
}

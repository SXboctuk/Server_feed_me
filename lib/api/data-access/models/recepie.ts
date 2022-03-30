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
import recepieRoute from '../../routes/recepie.routes';
import { Cookbook } from './cookbook';
import { RecepieComment } from './recepieComment';
import { User } from './user';

export interface RecepieAttributes {
    id: string;
    imagePath: string;
    title: string;
    description: string;
    cookingTime: number;
    ingredients: string;
    directions: string;
    view: number;
}

export class Recepie
    extends Model<InferAttributes<Recepie>, InferCreationAttributes<Recepie>>
    implements RecepieAttributes
{
    declare id: string;
    declare imagePath: string;
    declare title: string;
    declare ingredients: string;
    declare directions: string;
    declare description: string;
    declare cookingTime: number;
    declare view: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    // declare UserId: string | null;

    static initialize(sequelize: Sequelize) {
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
                // UserId: {
                //     type: DataTypes.UUID,
                //     allowNull: true,
                // },
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            {
                sequelize,
                modelName: 'Recepie',
            },
        );
        return Recepie;
    }

    //Recepie.hasMany(models.RecepieComment);
    declare getRecepieComments: HasManyGetAssociationsMixin<RecepieComment>;
    declare addRecepieComment: HasManyAddAssociationMixin<
        RecepieComment,
        number
    >;
    declare addRecepieComments: HasManyAddAssociationsMixin<
        RecepieComment,
        number
    >;
    declare setRecepieComments: HasManySetAssociationsMixin<
        RecepieComment,
        number
    >;
    declare removeRecepieComment: HasManyRemoveAssociationMixin<
        RecepieComment,
        number
    >;
    declare removeRecepieComments: HasManyRemoveAssociationsMixin<
        RecepieComment,
        number
    >;
    declare hasRecepieComment: HasManyHasAssociationMixin<
        RecepieComment,
        number
    >;
    declare hasRecepieComments: HasManyHasAssociationsMixin<
        RecepieComment,
        number
    >;
    declare countRecepieComments: HasManyCountAssociationsMixin;
    declare createRecepieComment: HasManyCreateAssociationMixin<RecepieComment>;

    //Recepie.belongsTo(models.User);
    declare getUser: BelongsToGetAssociationMixin<User>;
    declare setUser: BelongsToSetAssociationMixin<User, number>;
    declare createUser: BelongsToCreateAssociationMixin<User>;

    //Recepie.belongsToMany(models.User, {as: 'RecepieUserLike',foreignKey: 'RecepieId',through: 'RecepieLike',});
    declare getRecepieUserLikes: BelongsToManyGetAssociationsMixin<User>;
    declare setRecepieUserLikes: BelongsToManySetAssociationsMixin<
        User,
        number
    >;
    declare addRecepieUserLikes: BelongsToManyAddAssociationsMixin<
        User,
        number
    >;
    declare addRecepieUserLike: BelongsToManyAddAssociationMixin<User, number>;
    declare createRecepieUserLike: BelongsToManyCreateAssociationMixin<User>;
    declare removeRecepieUserLike: BelongsToManyRemoveAssociationMixin<
        User,
        number
    >;
    declare removeRecepieUserLikes: BelongsToManyRemoveAssociationsMixin<
        User,
        number
    >;
    declare hasRecepieUserLike: BelongsToManyHasAssociationMixin<User, number>;
    declare hasRecepieUserLikes: BelongsToManyHasAssociationsMixin<
        User,
        number
    >;
    declare countRecepieUserLike: BelongsToManyCountAssociationsMixin;

    //Recepie.belongsToMany(models.User, {as: 'RecepieUserSave',foreignKey: 'RecepieId',through: 'RecepieSave',});
    declare getRecepieUserSaves: BelongsToManyGetAssociationsMixin<User>;
    declare setRecepieUserSaves: BelongsToManySetAssociationsMixin<
        User,
        number
    >;
    declare addRecepieUserSaves: BelongsToManyAddAssociationsMixin<
        User,
        number
    >;
    declare addRecepieUserSave: BelongsToManyAddAssociationMixin<User, number>;
    declare createRecepieUserSave: BelongsToManyCreateAssociationMixin<User>;
    declare removeRecepieUserSave: BelongsToManyRemoveAssociationMixin<
        User,
        number
    >;
    declare removeRecepieUserSaves: BelongsToManyRemoveAssociationsMixin<
        User,
        number
    >;
    declare hasRecepieUserSave: BelongsToManyHasAssociationMixin<User, number>;
    declare hasRecepieUserSaves: BelongsToManyHasAssociationsMixin<
        User,
        number
    >;
    declare countRecepieUserSaves: BelongsToManyCountAssociationsMixin;

    //Recepie.belongsToMany(models.Cookbook, {as: 'RecepieCookbook',foreignKey: 'RecepieId',through: 'RecepieInCookbook',});
    declare getRecepieCookbooks: BelongsToManyGetAssociationsMixin<Cookbook>;
    declare setRecepieCookbooks: BelongsToManySetAssociationsMixin<
        Cookbook,
        number
    >;
    declare addRecepieCookbooks: BelongsToManyAddAssociationsMixin<
        Cookbook,
        number
    >;
    declare addRecepieCookbook: BelongsToManyAddAssociationMixin<
        Cookbook,
        number
    >;
    declare createRecepieCookbook: BelongsToManyCreateAssociationMixin<Cookbook>;
    declare removeRecepieCookbook: BelongsToManyRemoveAssociationMixin<
        Cookbook,
        number
    >;
    declare removeRecepieCookbooks: BelongsToManyRemoveAssociationsMixin<
        Cookbook,
        number
    >;
    declare hasRecepieCookbook: BelongsToManyHasAssociationMixin<
        Cookbook,
        number
    >;
    declare hasRecepieCookbooks: BelongsToManyHasAssociationsMixin<
        Cookbook,
        number
    >;
    declare countRecepieCookbooks: BelongsToManyCountAssociationsMixin;

    declare static assoctiations: {
        user: Association<Recepie, User>;
        recepieComments: Association<Recepie, RecepieComment>;
        recepieLikes: Association<Recepie, User>;
        recepieSaves: Association<Recepie, User>;
        cookbookRecepies: Association<Recepie, Cookbook>;
    };

    static associate(models: any) {
        Recepie.hasMany(models.RecepieComment);
        Recepie.belongsTo(models.User);
        Recepie.belongsToMany(models.User, {
            as: 'RecepieUserLike',
            foreignKey: 'RecepieId',
            through: 'RecepieLike',
        });
        Recepie.belongsToMany(models.User, {
            as: 'RecepieUserSave',
            foreignKey: 'RecepieId',
            through: 'RecepieSave',
        });
        Recepie.belongsToMany(models.Cookbook, {
            as: 'RecepieCookbook',
            foreignKey: 'RecepieId',
            through: 'RecepieInCookbook',
        });
    }
}

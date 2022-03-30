'use strict';

import {
    Association,
    BelongsToCreateAssociationMixin,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
    UUIDV4,
} from 'sequelize';
import { Cookbook } from './cookbook';
import { User } from './user';

interface CookbookCommentAttributes {
    id: string;
    text: string;
}

export class CookbookComment
    extends Model<
        InferAttributes<CookbookComment>,
        InferCreationAttributes<CookbookComment>
    >
    implements CookbookCommentAttributes
{
    declare id: string;
    declare text: string;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initialize(sequelize: Sequelize) {
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
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            {
                sequelize,
                modelName: 'CookbookComment',
            },
        );
        return CookbookComment;
    }
    // CookbookComment.belongsTo(models.Cookbook);
    declare getCookbook: BelongsToGetAssociationMixin<Cookbook>;
    declare setCookbook: BelongsToSetAssociationMixin<Cookbook, number>;
    declare createCookbook: BelongsToCreateAssociationMixin<Cookbook>;

    // CookbookComment.belongsTo(models.User);
    declare getUser: BelongsToGetAssociationMixin<User>;
    declare setUser: BelongsToSetAssociationMixin<User, number>;
    declare createUser: BelongsToCreateAssociationMixin<User>;

    declare static assoctiations: {
        user: Association<CookbookComment, User>;
        cookbook: Association<CookbookComment, Cookbook>;
    };
    static associate(models: any) {
        CookbookComment.belongsTo(models.Cookbook);
        CookbookComment.belongsTo(models.User);
    }
}

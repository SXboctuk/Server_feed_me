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
import { Recepie } from './recepie';
import { User } from './user';

interface RecepieCommentAttributes {
    id: string;
    text: string;
}
export class RecepieComment
    extends Model<
        InferAttributes<RecepieComment>,
        InferCreationAttributes<RecepieComment>
    >
    implements RecepieCommentAttributes
{
    declare id: string;
    declare text: string;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initialize(sequelize: Sequelize) {
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
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            {
                sequelize,
                modelName: 'RecepieComment',
            },
        );
        return RecepieComment;
    }
    // RecepieComment.belongsTo(models.Recepie);
    declare getRecepie: BelongsToGetAssociationMixin<Recepie>;
    declare setRecepie: BelongsToSetAssociationMixin<Recepie, number>;
    declare createRecepie: BelongsToCreateAssociationMixin<Recepie>;

    // RecepieComment.belongsTo(models.User);
    declare getUser: BelongsToGetAssociationMixin<User>;
    declare setUser: BelongsToSetAssociationMixin<User, number>;
    declare createUser: BelongsToCreateAssociationMixin<User>;

    declare static assoctiations: {
        user: Association<RecepieComment, User>;
        recepie: Association<RecepieComment, Recepie>;
    };
    static associate(models: any) {
        RecepieComment.belongsTo(models.Recepie);
        RecepieComment.belongsTo(models.User);
    }
}

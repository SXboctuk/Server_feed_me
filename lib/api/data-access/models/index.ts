'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import { dbConfig } from '../../../constants/config';
const db: any = {};

let sequelize: any;

if (env === 'development') {
    sequelize = new Sequelize(
        dbConfig.development.database,
        dbConfig.development.username,
        dbConfig.development.password,
        {
            host: dbConfig.development.host,
            dialect: dbConfig.development.dialect,
        },
    );
} else if (env === 'test') {
    sequelize = new Sequelize(
        dbConfig.test.database,
        dbConfig.test.username,
        dbConfig.test.password,
        {
            host: dbConfig.test.host,
            dialect: dbConfig.test.dialect,
        },
    );
} else if (env === 'production') {
    sequelize = new Sequelize(
        dbConfig.production.database,
        dbConfig.production.username,
        dbConfig.production.password,
        {
            host: dbConfig.production.host,
            dialect: dbConfig.production.dialect,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        },
    );
    // sequelize = new Sequelize(process.env.DATABASE_URL, {
    //     dialectOptions: {
    //         ssl: {
    //             require: true,
    //             rejectUnauthorized: false,
    //         },
    //     },
    // });
}

fs.readdirSync(__dirname)
    .filter((file: string) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.ts'
        );
    })
    .forEach((file: any) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes,
        );
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

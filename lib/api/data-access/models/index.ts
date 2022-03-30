'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
import { Sequelize, DataTypes } from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import { dbConfig } from '../../../constants/config';
import { Cookbook } from './cookbook';
import { CookbookComment } from './cookbookComment';
import { Recepie } from './recepie';
import { RecepieComment } from './recepieComment';
import { User } from './user';

const db: any = {};

let sequelize: Sequelize;

if (env === 'test') {
    sequelize = new Sequelize(
        dbConfig.test.database,
        dbConfig.test.username,
        dbConfig.test.password,
        {
            host: dbConfig.test.host,
            dialect: dbConfig.test.dialect,
            // logging: false,
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
} else {
    sequelize = new Sequelize(
        dbConfig.development.database,
        dbConfig.development.username,
        dbConfig.development.password,
        {
            host: dbConfig.development.host,
            dialect: dbConfig.development.dialect,
        },
    );
}

// add model
db[User.name] = User.initialize(sequelize);
db[Cookbook.name] = Cookbook.initialize(sequelize);
db[Recepie.name] = Recepie.initialize(sequelize);
db[CookbookComment.name] = CookbookComment.initialize(sequelize);
db[RecepieComment.name] = RecepieComment.initialize(sequelize);

Object.keys(db).forEach((key) => {
    if (db[key].associate) {
        db[key].associate(db);
    }
});
// console.log((db['User'] = db['User'].initialize(db)));
// User.initialize(sequelize);
// RecepieComment.initialize(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

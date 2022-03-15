"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config_1 = require("../../../constants/config");
const db = {};
let sequelize;
if (env === "development") {
    sequelize = new Sequelize(config_1.dbConfig.development.database, config_1.dbConfig.development.username, config_1.dbConfig.development.password, {
        host: config_1.dbConfig.development.host,
        dialect: config_1.dbConfig.development.dialect,
    });
}
else if (env === "test") {
    sequelize = new Sequelize(config_1.dbConfig.test.database, config_1.dbConfig.test.username, config_1.dbConfig.test.password, {
        host: config_1.dbConfig.test.host,
        dialect: config_1.dbConfig.test.dialect,
    });
}
else if (env === "production") {
    sequelize = new Sequelize(config_1.dbConfig.production.database, config_1.dbConfig.production.username, config_1.dbConfig.production.password, {
        host: config_1.dbConfig.production.host,
        dialect: config_1.dbConfig.production.dialect,
    });
}
fs.readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-3) === ".ts");
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
exports.default = db;

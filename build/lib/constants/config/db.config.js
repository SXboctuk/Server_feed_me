"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    development: {
        username: "postgres",
        password: "postgres",
        database: "postgres",
        host: "localhost",
        dialect: "postgres",
    },
    test: {
        username: "root",
        password: "pass",
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: "pass",
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.serverConfig = void 0;
const server_config_1 = require("./server.config");
Object.defineProperty(exports, "serverConfig", { enumerable: true, get: function () { return server_config_1.serverConfig; } });
const db_config_1 = require("./db.config");
Object.defineProperty(exports, "dbConfig", { enumerable: true, get: function () { return db_config_1.dbConfig; } });

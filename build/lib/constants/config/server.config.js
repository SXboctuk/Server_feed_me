"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConfig = void 0;
exports.serverConfig = {
    port: Number(process.env.SERVER_PORT) || 3000,
    hostName: process.env.HOST_NAME || "localhost",
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = void 0;
const auth_messages_1 = require("./auth.messages");
const file_messages_1 = require("./file.messages");
const server_messages_1 = require("./server.messages");
const user_messages_1 = require("./user.messages");
exports.MESSAGES = { SERVER: server_messages_1.SERVER, AUTH: auth_messages_1.AUTH, USER: user_messages_1.USER, FILE: file_messages_1.FILE };

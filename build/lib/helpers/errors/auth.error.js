"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const external_error_1 = __importDefault(require("./external.error"));
const code_statuses_1 = require("../../constants/code-statuses");
const messages_1 = require("../../constants/messages");
class AuthError extends external_error_1.default {
    constructor({ message = messages_1.MESSAGES.AUTH.ERROR.BASE_ERROR, status = code_statuses_1.CODE_STATUSES.UNAUTHORISED, }) {
        super({ message, status });
    }
}
exports.default = AuthError;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const external_error_1 = __importDefault(require("./external.error"));
class BaseError extends external_error_1.default {
    constructor({ status, message }) {
        super({ status, message });
    }
}
exports.default = BaseError;

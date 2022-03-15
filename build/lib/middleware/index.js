"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
const auth_middleware_1 = require("./auth.middleware");
const error_middleware_1 = __importDefault(require("./error.middleware"));
exports.middlewares = { errorMiddleware: error_middleware_1.default, verifyAuthToken: auth_middleware_1.verifyAuthToken };

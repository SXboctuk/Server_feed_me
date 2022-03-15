"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = exports.ExternalError = exports.InternalError = void 0;
const auth_error_1 = __importDefault(require("./auth.error"));
exports.AuthError = auth_error_1.default;
const external_error_1 = __importDefault(require("./external.error"));
exports.ExternalError = external_error_1.default;
const internal_error_1 = __importDefault(require("./internal.error"));
exports.InternalError = internal_error_1.default;

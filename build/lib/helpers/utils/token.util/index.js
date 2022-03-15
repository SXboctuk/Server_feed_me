"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenUtils = void 0;
const generateToken_util_1 = __importDefault(require("./generateToken.util"));
const verifyToken_util_1 = __importDefault(require("./verifyToken.util"));
exports.tokenUtils = { generateToken: generateToken_util_1.default, verifyToken: verifyToken_util_1.default };

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../../../constants/auth");
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, auth_1.AUTH.JWT_SECRET);
};
exports.default = verifyToken;

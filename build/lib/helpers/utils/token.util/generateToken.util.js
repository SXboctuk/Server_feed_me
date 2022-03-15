"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../../../constants/auth");
const generateToken = (payload) => {
    const accessToken = jsonwebtoken_1.default.sign(payload, auth_1.AUTH.JWT_SECRET, {
        algorithm: auth_1.AUTH.TOKEN_ALGORITHM,
        expiresIn: auth_1.AUTH.JWT_TOKEN_LIFE,
    });
    return accessToken;
};
exports.default = generateToken;

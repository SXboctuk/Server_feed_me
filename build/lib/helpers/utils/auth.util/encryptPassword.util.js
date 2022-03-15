"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const auth_1 = require("../../../constants/auth");
const errors_1 = require("../../errors");
const encryptPassword = (password) => {
    if (!password) {
        throw new errors_1.AuthError({
            message: "encryptPassword: no data to encrypt.",
        });
    }
    const encryptedPassword = crypto_1.default.pbkdf2Sync(password, auth_1.CRYPTO.SALT, auth_1.CRYPTO.ITERATIONS, auth_1.CRYPTO.KEYLEN, auth_1.CRYPTO.DIGEST);
    return encryptedPassword.toString("hex");
};
exports.default = encryptPassword;

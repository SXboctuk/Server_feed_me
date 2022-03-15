"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const auth_1 = require("../../../constants/auth");
const errors_1 = require("../../errors");
const comparePasswords = (password, hashedPassword) => {
    if (!password) {
        throw new errors_1.AuthError({
            message: "comparePasswords: no password to compare",
        });
    }
    const encryptedPassword = crypto_1.default
        .pbkdf2Sync(password, auth_1.CRYPTO.SALT, auth_1.CRYPTO.ITERATIONS, auth_1.CRYPTO.KEYLEN, auth_1.CRYPTO.DIGEST)
        .toString("hex");
    return encryptedPassword === hashedPassword;
};
exports.default = comparePasswords;

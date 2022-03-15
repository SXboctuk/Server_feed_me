"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_validator_1 = require("express-validator");
const checkError_validator_1 = require("./checkError.validator");
const signIn = [
    (0, express_validator_1.body)("email").notEmpty().isString(),
    (0, express_validator_1.body)("password").notEmpty().isString(),
    (0, checkError_validator_1.checkError)(),
];
const signUp = [
    (0, express_validator_1.body)("username").notEmpty().isString(),
    (0, express_validator_1.body)("email").notEmpty().isString(),
    (0, express_validator_1.body)("password").notEmpty().isString(),
    (0, express_validator_1.body)("repeatPassword").notEmpty().isString(),
    (0, checkError_validator_1.checkError)(),
];
exports.auth = { signIn, signUp };

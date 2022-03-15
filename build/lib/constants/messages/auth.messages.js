"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH = void 0;
const BASE_ERROR = "Auth error.";
const BASE_SUCCESS = "Auth success.";
const OK = "Ok.";
const ERROR = {
    BASE_ERROR,
    EMAIL_EXISTS: `The email is already exists.`,
    EMAIL_NOT_EXIST: `The email does not exist.`,
    WRONG_PASSWORD: `Wrong password.`,
    UNAUTHORISED: `Token expired.`,
    USERNAME_EXISTS: `The username is already exists.`,
};
const SUCCESS = {
    BASE_SUCCESS,
    OK,
};
exports.AUTH = {
    SUCCESS,
    ERROR,
};

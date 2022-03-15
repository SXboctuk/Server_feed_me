"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const sign_in_controller_1 = __importDefault(require("./sign-in.controller"));
const sign_up_controller_1 = __importDefault(require("./sign-up.controller"));
const tokenAuth_controller_1 = __importDefault(require("./tokenAuth.controller"));
exports.authControllers = {
    signIn: sign_in_controller_1.default,
    signUp: sign_up_controller_1.default,
    tokenAuth: tokenAuth_controller_1.default,
};

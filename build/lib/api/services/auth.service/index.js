"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const tokenAuth_service_1 = __importDefault(require("./tokenAuth.service"));
const sign_in_service_1 = __importDefault(require("./sign-in.service"));
const sign_up_service_1 = __importDefault(require("./sign-up.service"));
exports.authServices = {
    signIn: sign_in_service_1.default,
    signUp: sign_up_service_1.default,
    tokenAuth: tokenAuth_service_1.default,
};

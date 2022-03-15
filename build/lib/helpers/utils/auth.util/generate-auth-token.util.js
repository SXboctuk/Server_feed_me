"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const token_util_1 = require("../token.util");
const generateAuthToken = ({ email, id }) => {
    if (!email || !id) {
        throw new errors_1.InternalError();
    }
    const token = token_util_1.tokenUtils.generateToken({ email, id });
    return token;
};
exports.default = generateAuthToken;

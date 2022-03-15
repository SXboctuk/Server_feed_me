"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const safeJsonParse = (str) => {
    try {
        return JSON.parse(str);
    }
    catch (err) {
        throw new errors_1.InternalError(err);
    }
};
exports.default = safeJsonParse;

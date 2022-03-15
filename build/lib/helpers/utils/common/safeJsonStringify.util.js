"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const safeJsonStringify = (obj) => {
    try {
        return JSON.stringify(obj);
    }
    catch (err) {
        throw new errors_1.InternalError(err);
    }
};
exports.default = safeJsonStringify;

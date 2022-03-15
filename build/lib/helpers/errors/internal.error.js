"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InternalError {
    constructor(err = new Error()) {
        this.isInternal = true;
        this.isCustom = true;
        this.message = err.message;
        this.stack = err.stack || "";
    }
}
exports.default = InternalError;

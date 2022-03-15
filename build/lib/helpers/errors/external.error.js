"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExternalError {
    constructor({ message, status }) {
        this.isExternal = true;
        this.isCustom = true;
        this.message = message;
        this.status = status;
    }
}
exports.default = ExternalError;

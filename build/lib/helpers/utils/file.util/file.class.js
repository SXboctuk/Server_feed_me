"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MFile = void 0;
class MFile {
    constructor(originalname, buffer) {
        this.buffer = buffer;
        this.originalname = originalname;
    }
}
exports.MFile = MFile;

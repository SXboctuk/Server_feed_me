"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRYPTO = exports.AUTH = void 0;
exports.AUTH = {
    JWT_SECRET: "GUnFDIULST4sF7vmF9YGPd8DHFFKCp0eDo9aYFG1AmtPAD6Qe7rGOHLxi1TM",
    JWT_TOKEN_LIFE: "10h",
    TOKEN_ALGORITHM: "HS256",
};
exports.CRYPTO = {
    SALT: "salt",
    ITERATIONS: 100000,
    KEYLEN: 64,
    DIGEST: "sha512",
};

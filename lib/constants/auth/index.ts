import { Algorithm } from "jsonwebtoken";

export const AUTH: {
	JWT_SECRET: string;
	JWT_TOKEN_LIFE: string;
	TOKEN_ALGORITHM: Algorithm;
} = {
    JWT_SECRET: "GUnFDIULST4sF7vmF9YGPd8DHFFKCp0eDo9aYFG1AmtPAD6Qe7rGOHLxi1TM",
    JWT_TOKEN_LIFE: "10h",
    TOKEN_ALGORITHM: "HS256",
};

export const CRYPTO = {
    SALT: "salt",
    ITERATIONS: 100000,
    KEYLEN: 64,
    DIGEST: "sha512",
};

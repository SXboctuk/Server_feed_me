import crypto from "crypto";
import { CRYPTO } from "../../../constants/auth";
import { AuthError } from "../../errors";

const encryptPassword = (password: string) => {
    if (!password) {
        throw new AuthError({
            message: "encryptPassword: no data to encrypt.",
        });
    }
    const encryptedPassword = crypto.pbkdf2Sync(
        password,
        CRYPTO.SALT,
        CRYPTO.ITERATIONS,
        CRYPTO.KEYLEN,
        CRYPTO.DIGEST
    );
    return encryptedPassword.toString("hex");
};

export default encryptPassword;

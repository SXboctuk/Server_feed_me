import comparePasswords from "./comparePasswords.util";
import encryptPassword from "./encryptPassword.util";
import generateAuthToken from "./generate-auth-token.util";

export const authUtils = {
    encryptPassword,
    comparePasswords,
    generateAuthToken,
};

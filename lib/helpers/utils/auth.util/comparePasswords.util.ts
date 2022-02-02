import crypto from "crypto";
import { CRYPTO } from "../../../constants/auth";
import { AuthError } from "../../errors";

const comparePasswords = (password: string, hashedPassword: string) => {
	if (!password) {
		throw new AuthError({
			message: "comparePasswords: no password to compare",
		});
	}
	const encryptedPassword = crypto
		.pbkdf2Sync(
			password,
			CRYPTO.SALT,
			CRYPTO.ITERATIONS,
			CRYPTO.KEYLEN,
			CRYPTO.DIGEST
		)
		.toString("hex");

	return encryptedPassword === hashedPassword;
};

export default comparePasswords;

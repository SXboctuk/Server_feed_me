import { MESSAGES } from "../../../constants/messages";
import { AuthError } from "../../../helpers/errors";
import { authUtils } from "../../../helpers/utils/auth.util";
import db from "../../data-access/models";

const signIn = async ({
    email,
    password,
}: {
	email: string;
	password: string;
}): Promise<{ account: any; token: string }> => {
    const account = await db.User.findOne({ where: { email: email } });

    if (!account) {
        throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_NOT_EXIST });
    }

    const isPasswordMatched = authUtils.comparePasswords(
        password,
        account.passwordHash
    );

    if (!isPasswordMatched) {
        throw new AuthError({ message: MESSAGES.AUTH.ERROR.WRONG_PASSWORD });
    }

    const token = authUtils.generateAuthToken({
        email: account.email,
        id: account.id,
    });

    return {
        account,
        token,
    };
};

export default signIn;

import { MESSAGES } from "../../../constants/messages";
import { AuthError } from "../../../helpers/errors";
import { authUtils } from "../../../helpers/utils/auth.util";
import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";

const signUp = async ({
    username,
    email,
    password,
    repeatPassword,
}: {
	username: string;
	email: string;
	password: string;
	repeatPassword: string;
}): Promise<{ account: any; token: string }> => {
    // TODO it in validator
    const isPasswordsMatched = password === repeatPassword;

    if (!isPasswordsMatched) {
        throw new AuthError({
            message: "Password and repeat password are differ.",
        });
    }

    const user = await db.User.findOne({ where: { email: email } });

    if (user?.dataValues.email === email) {
        throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_EXISTS });
    }

    const encryptedPassword = authUtils.encryptPassword(password);
    const account = await db.User.create({
        id: uuidv4(),
        imagePath: "imagepath/",
        name: username,
        email: email,
        userText: "Non",
        passwordHash: encryptedPassword,
    });

    const token = authUtils.generateAuthToken({
        email: account.email,
        id: account.id,
    });

    return {
        account,
        token,
    };
};
export default signUp;

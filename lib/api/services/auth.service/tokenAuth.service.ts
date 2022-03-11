import { MESSAGES } from "../../../constants/messages";
import { AuthError } from "../../../helpers/errors";
import { authUtils } from "../../../helpers/utils/auth.util";
import db from "../../data-access/models";

const tokenAuth = async (userId: string) => {
	let account = await db.User.findOne({ where: { id: userId } });

	if (!account) {
		throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_NOT_EXIST });
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

export default tokenAuth;

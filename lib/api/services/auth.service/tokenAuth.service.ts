import { MESSAGES } from "../../../constants/messages";
import { AuthError } from "../../../helpers/errors";
import db from "../../data-access/models";

const tokenAuth = async (userId: string): Promise<{ account: any }> => {
	let account = await db.User.findOne({ where: { id: userId } });

	if (!account) {
		throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_NOT_EXIST });
	}

	return {
		account,
	};
};

export default tokenAuth;

import { STATUS_CODES } from "http";
import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const changeEmail = async (newEmail: string, id: string) => {
	const user = await db.User.findOne({ where: { id: id } });

	if (user.email === newEmail) {
		throw new ExternalError({
			message: MESSAGES.USER.VALUE_IS_SAME,
			status: CODE_STATUSES.BAD_REQUEST,
		});
	}

	const userCheck = await db.User.findOne({ where: { email: newEmail } });

	if (userCheck?.email === newEmail) {
		throw new ExternalError({
			message: MESSAGES.USER.EMAIL_EXISTS,
			status: CODE_STATUSES.BAD_REQUEST,
		});
	}

	return await db.User.findOne({ where: { id: id } }).then((user: any) =>
		user.update({ email: newEmail })
	);
};
export default changeEmail;

import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const changeUserText = async (newUserText: string, id: string) => {
	const user = await db.User.findOne({ where: { id: id } });

	if (user.userText === newUserText) {
		throw new ExternalError({
			message: MESSAGES.USER.VALUE_IS_SAME,
			status: CODE_STATUSES.BAD_REQUEST,
		});
	}

	return await db.User.findOne({ where: { id: id } }).then((user: any) =>
		user.update({ userText: newUserText })
	);
};
export default changeUserText;

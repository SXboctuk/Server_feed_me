import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const changeName = async (newName: string, id: string) => {
	const user = await db.User.findOne({ where: { id: id } });

	if (user.name === newName) {
		throw new ExternalError({
			message: MESSAGES.USER.VALUE_IS_SAME,
			status: CODE_STATUSES.BAD_REQUEST,
		});
	}

	return await db.User.findOne({ where: { id: id } }).then((user: any) =>
		user.update({ name: newName })
	);
};
export default changeName;

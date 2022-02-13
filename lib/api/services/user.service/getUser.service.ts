import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const getUser = async (id: string) => {
	return await db.User.findOne({ where: { id: id } });
};
export default getUser;

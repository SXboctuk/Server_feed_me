import { authUtils } from "../../../helpers/utils/auth.util";
import db from "../../data-access/models";

const changePassword = async (newPassword: string, id: string) => {
	const encryptedPassword = authUtils.encryptPassword(newPassword);
	return await db.User.findOne({ where: { id: id } }).then((user: any) =>
		user.update({ passwordHash: encryptedPassword })
	);
};
export default changePassword;

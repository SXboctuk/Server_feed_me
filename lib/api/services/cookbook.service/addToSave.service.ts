import { InternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const addToSave = async (cookbookId: string, userId: string) => {
	return await db.Cookbook.findByPk(cookbookId)
		.then(async (cookbook: any) => {
			return await db.User.findByPk(userId)
				.then(async (user: any) => {
					const isCookbookSaved = await user
						.hasUserCookbookSave(cookbook)
						.catch((err: any) => new InternalError(err));
					if (isCookbookSaved) {
						return { message: "This cookbook already added" };
					} else {
						return await user
							.addUserCookbookSave(cookbook)
							.catch((err: any) => new InternalError(err));
					}
				})
				.catch((err: any) => new InternalError(err));
		})
		.catch((err: any) => new InternalError(err));
};

export default addToSave;

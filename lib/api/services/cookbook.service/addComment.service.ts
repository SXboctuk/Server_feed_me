import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";
import { InternalError } from "../../../helpers/errors";

const addComment = async (cookbookId: string, userId: string, text: string) => {
	return await db.Cookbook.findByPk(cookbookId).then((cookbook: any) => {
		if (!cookbook) {
			return { message: "cookbook not found" };
		}

		return db.User.findByPk(userId).then(async (user: any) => {
			if (!user) {
				return { message: "user not found" };
			}
			console.log(cookbook, user);
			return await cookbook
				.createCookbookComment({
					id: uuidv4(),
					text: text,
					UserId: user.id,
				})
				.catch((err: any) => new InternalError(err));
		});
	});
};

export default addComment;

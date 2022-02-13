import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";

const addComment = async (recepieId: string, userId: string, text: string) => {
	return await db.Recepie.findByPk(recepieId).then((recepie: any) => {
		if (!recepie) {
			return null;
		}

		return db.User.findByPk(userId).then((user: any) => {
			if (!user) {
				return null;
			}

			return recepie.createRecepieComment({
				id: uuidv4(),
				text: text,
				UserId: user.id,
			});
		});
	});
};

export default addComment;

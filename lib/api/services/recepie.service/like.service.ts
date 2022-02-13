import { InternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const like = async (userId: string, recepieId: string) => {
	return await db.Recepie.findByPk(recepieId)
		.then(async (recepie: any) => {
			const user = await db.User.findByPk(userId);
			const save = await recepie
				.hasRecepieUserLike(user)
				.catch((err: any) => new InternalError(err));
			let counter;
			if (save) {
				await recepie
					.removeRecepieUserLike(user)
					.catch((err: any) => new InternalError(err));
				counter = await recepie.countRecepieUserLike();

				return { value: false, counter: counter };
			} else {
				await recepie
					.addRecepieUserLike(user)
					.catch((err: any) => new InternalError(err));
				counter = await recepie.countRecepieUserLike();
				return { value: true, counter: counter };
			}
		})
		.catch((err: any) => new InternalError(err));
};

export default like;

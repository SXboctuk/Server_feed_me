import { ExternalError, InternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const addToSave = async (recepieId: string, userId: string) => {
	return await db.Recepie.findByPk(recepieId)
		.then(async (recepie: any) => {
			return await db.User.findByPk(userId)
				.then(async (user: any) => {
					const isRecepieSaved = await user
						.hasUserRecepieSave(recepie)
						.catch((err: any) => {
							throw new ExternalError({
								message: err.message,
								status: 403,
							});
						});
					if (isRecepieSaved) {
						return { message: "This recepie already added" };
					} else {
						return await user
							.addUserRecepieSave(recepie)
							.catch((err: any) => {
								throw new ExternalError({
									message: err.message,
									status: 403,
								});
							});
					}
				})
				.catch((err: any) => {
					throw new ExternalError({
						message: err.message,
						status: 403,
					});
				});
		})
		.catch((err: any) => {
			throw new ExternalError({ message: err.message, status: 403 });
		});
};

export default addToSave;

import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";
import { recepieService } from ".";
import { MFile } from "../../../helpers/utils/file.util/file.class";
import { fileUtil } from "../../../helpers/utils/file.util";
import { InternalError } from "../../../helpers/errors";

const create = async (
	image: any,
	title: string,
	ingredients: string,
	directions: string,
	description: string,
	cookingTime: number,
	userId: string
) => {
	let saveFile: MFile;
	const buffer = await fileUtil.convertToWebP(image.data);
	saveFile = new MFile(`${uuidv4()}.webp`, buffer);
	const savedFile = await fileUtil.saveFiles(saveFile, "recepieImage");

	return await db.Recepie.create({
		id: uuidv4(),
		imagePath: savedFile.url,
		title: title,
		ingredients: ingredients,
		directions: directions,
		description: description,
		cookingTime: cookingTime,
		view: 0,
		UserId: userId,
	})
		.then(async (recepie: any) => {
			if (!recepie) {
				return { message: "errr create" };
			}
			return await db.User.findByPk(userId).then(async (user: any) => {
				if (!user) {
					return { message: "errr create" };
				}
				await recepie.addRecepieUserSave(user);
				return recepie;
			});
		})
		.catch((err: any) => new InternalError(err));
};

export default create;

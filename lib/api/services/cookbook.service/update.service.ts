import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";
import { MFile } from "../../../helpers/utils/file.util/file.class";
import { fileUtil } from "../../../helpers/utils/file.util";
import { InternalError } from "../../../helpers/errors";
import { FileElementResponse } from "../../../helpers/utils/file.util/saveFiles.utils";
import { commonUtils } from "../../../helpers";

const update = async (
	cookbookId: string,
	image: any,
	title: string,
	isVegatarian: boolean,
	isWithoutMilk: boolean,
	isWithouEggs: boolean,
	description: string,
	recepieIdList: string,
	userId: string
) => {
	let savedFile: FileElementResponse;
	if (image) {
		let saveFile: MFile;
		const buffer = await fileUtil.convertToWebP(image.data);
		saveFile = new MFile(`${uuidv4()}.webp`, buffer);
		savedFile = await fileUtil.saveFiles(saveFile, "recepieImage");
	}

	const cookbook = await db.Cookbook.findByPk(cookbookId)
		.then(async (cookbook: any) => {
			if (!cookbook) {
				return { message: "cookbook not found" };
			}
			if (cookbook.UserId === userId) {
				await cookbook
					.update({
						imagePath: savedFile?.url || cookbook.imagePath,
						title: title || cookbook.title,
						description: description || cookbook.description,
						isVegatarian: isVegatarian || cookbook.isVegatarian,
						isWithoutMilk: isWithoutMilk || cookbook.isWithoutMilk,
						isWithouEggs: isWithouEggs || cookbook.isWithouEggs,
						view: cookbook.view,
					})
					.catch((err: any) => new InternalError(err));

				if (recepieIdList) {
					const recepieList = await commonUtils.safeJsonParse(
						recepieIdList
					);
					if (recepieList && recepieList.length > 0) {
						await cookbook.removeCookbookRecepie(
							await cookbook.getCookbookRecepie()
						);
						recepieList.forEach(async (elem: any) => {
							await db.Recepie.findByPk(elem)
								.then(async (recepie: any) => {
									await cookbook.addCookbookRecepie(recepie);
								})
								.catch((err: any) => new InternalError(err));
						});
					}
				}

				return await db.Cookbook.findByPk(cookbook.id, {
					include: "CookbookRecepie",
				});
			} else {
				throw new InternalError();
			}
		})
		.catch((err: any) => new InternalError(err));

	return cookbook;
};

export default update;

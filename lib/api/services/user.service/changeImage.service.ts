import { fileUtil } from "../../../helpers/utils/file.util";
import { MFile } from "../../../helpers/utils/file.util/file.class";
import { v4 as uuidv4 } from "uuid";
import db from "../../data-access/models";
import { ExternalError } from "../../../helpers/errors";
import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";

const changeImage = async (file: any, id: string) => {
	let saveFile: MFile;
	if (file.mimetype.includes("image")) {
		const buffer = await fileUtil.convertToWebP(file.data);
		saveFile = new MFile(`${uuidv4()}.webp`, buffer);
		const savedFile = await fileUtil.saveFiles(saveFile, "userAvatar");

		return await db.User.findOne({ where: { id: id } }).then((user: any) =>
			user.update({ imagePath: savedFile.url })
		);
	} else {
		throw new ExternalError({
			message: MESSAGES.FILE.WRONG_FILE_FORMAT,
			status: CODE_STATUSES.BAD_REQUEST,
		});
	}
};
export default changeImage;

import { NextFunction, Request, Response } from "express";
import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import { userServices } from "../../services";

const changeImage = async (req: Request, res: Response, next: NextFunction) => {
	const { userPayload } = req.body;
	try {
		if (req.files) {
			const user = await userServices.changeImage(
				req.files.image,
				userPayload.id
			);

			res.json({
				message: MESSAGES.USER.CHANGED_SUCCESS,
				imagePath: user.dataValues.imagePath,
			});
		} else {
			throw new ExternalError({
				message: MESSAGES.FILE.FILE_NOT_CATCH,
				status: CODE_STATUSES.BAD_REQUEST,
			});
		}
	} catch (err) {
		next(err);
	}
};

export default changeImage;

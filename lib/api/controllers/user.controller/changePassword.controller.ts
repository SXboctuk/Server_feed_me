import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { userServices } from "../../services";

const changePassword = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { newPassword, userPayload } = req.body;
	try {
		const user = await userServices.changePassword(
			newPassword,
			userPayload.id
		);
		res.json({
			message: MESSAGES.USER.CHANGED_SUCCESS,
		});
	} catch (err) {
		next(err);
	}
};

export default changePassword;

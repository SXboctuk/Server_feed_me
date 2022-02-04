import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { userServices } from "../../services";

const changeEmail = async (req: Request, res: Response, next: NextFunction) => {
	const { newEmail, userPayload } = req.body;
	try {
		const user = await userServices.changeEmail(newEmail, userPayload.id);

		res.json({
			message: MESSAGES.USER.CHANGED_SUCCESS,
			email: user.dataValues.email,
		});
	} catch (err) {
		next(err);
	}
};

export default changeEmail;

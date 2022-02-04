import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { userServices } from "../../services";

const changeName = async (req: Request, res: Response, next: NextFunction) => {
	const { newName, userPayload } = req.body;
	try {
		const user = await userServices.changeName(newName, userPayload.id);

		res.json({
			message: MESSAGES.USER.CHANGED_SUCCESS,
			name: user.dataValues.name,
		});
	} catch (err) {
		next(err);
	}
};

export default changeName;

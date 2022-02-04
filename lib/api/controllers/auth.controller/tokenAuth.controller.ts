import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { authServices } from "../../services";

const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { userPayload } = req.body;
		const { account } = await authServices.tokenAuth(userPayload.id);

		res.json({
			body: {
				message: MESSAGES.AUTH.SUCCESS.BASE_SUCCESS,
				...account.dataValues,
			},
		});
	} catch (err) {
		next(err);
	}
};

export default tokenAuth;

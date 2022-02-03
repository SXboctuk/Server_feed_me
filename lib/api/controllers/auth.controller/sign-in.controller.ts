import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { authServices } from "../../services";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;
		const { token, account } = await authServices.signIn({
			email,
			password,
		});

		res.cookie("jwt", token);

		res.json({
			body: {
				message: MESSAGES.AUTH.SUCCESS.BASE_SUCCESS,
				...account.dataValues,
				token: token,
			},
		});
	} catch (err) {
		next(err);
	}
};

export default signIn;

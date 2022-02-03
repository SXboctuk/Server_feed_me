import { NextFunction, Request, Response } from "express";
import { authServices } from "../../services";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, email, password, repeatPassword } = req.body;
		const { token, account } = await authServices.signUp({
			username,
			email,
			password,
			repeatPassword,
		});
		res.cookie("jwt", token);
		res.json({
			message: "super",
			body: {
				...account.dataValues,
				token: token,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export default signUp;

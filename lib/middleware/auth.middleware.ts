import { NextFunction, Response, Request } from "express";
import { tokenUtils } from "../helpers";

const verifyAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies["jwt"];

		if (!token) {
			res.status(500).json({ message: "auth error" });
		}

		const userPayload = tokenUtils.verifyToken(token);

		req.body = {
			...req.body,
			userPayload,
			token,
		};
	} catch (err) {
		return res.json(err);
	}
	next();
};

export { verifyAuthToken };

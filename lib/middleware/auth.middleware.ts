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
			res.status(500).send("auth");
		}

		const userPayload = tokenUtils.verifyToken(token);

		req.body = {
			...req.body,
			userPayload,
			token,
		};
	} catch (err) {
		res.json(err);
	}

	await next();
};

export { verifyAuthToken };

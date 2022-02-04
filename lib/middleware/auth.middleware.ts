import { NextFunction, Response, Request } from "express";
import { tokenUtils } from "../helpers";

const verifyAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.cookies["jwt"];

	const userPayload = tokenUtils.verifyToken(token);

	req.body = {
		...req.body,
		userPayload,
		token,
	};

	await next();
};

export { verifyAuthToken };

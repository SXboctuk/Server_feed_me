import { NextFunction, Request, Response } from "express";
import { userServices } from "../../services";

const getUserCookbooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	try {
		res.json(await userServices.getUserCookbooks(id));
	} catch (err) {
		next(err);
	}
};

export default getUserCookbooks;

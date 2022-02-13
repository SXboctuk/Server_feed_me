import { NextFunction, Request, Response } from "express";
import { userServices } from "../../services";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	try {
		res.json(await userServices.getUser(id));
	} catch (err) {
		next(err);
	}
};

export default getUser;

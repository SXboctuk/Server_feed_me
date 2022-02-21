import { NextFunction, Request, Response } from "express";
import { userServices } from "../../services";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.json(await userServices.getUsers());
	} catch (err) {
		next(err);
	}
};

export default getUsers;

import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await recepieService.getAll();

		res.json(data);
	} catch (err) {
		next(err);
	}
};

export default getAll;

import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	try {
		res.send(await cookbookService.getAll());
	} catch (err) {
		next(err);
	}
};

export default getAll;

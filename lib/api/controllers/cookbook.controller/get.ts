import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const get = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	try {
		res.send(await cookbookService.get(id));
	} catch (err) {
		next(err);
	}
};

export default get;

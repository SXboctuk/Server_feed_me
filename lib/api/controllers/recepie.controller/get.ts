import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const get = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	try {
		return await recepieService.get(id);
	} catch (err) {
		next(err);
	}
};

export default get;

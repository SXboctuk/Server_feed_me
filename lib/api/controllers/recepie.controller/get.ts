import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const get = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	try {
		const data = await recepieService.get(id, req);

		res.json(data);
	} catch (err) {
		next(err);
	}
};

export default get;

import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const addToSave = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const { userPayload } = req.body;
	try {
		res.send(await cookbookService.addToSave(id, userPayload.id));
	} catch (err) {
		next(err);
	}
};

export default addToSave;

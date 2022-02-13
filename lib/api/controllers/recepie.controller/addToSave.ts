import { NextFunction, Request, Response } from "express";
import { copySync, cp } from "fs-extra";
import { recepieService } from "../../services";

const addToSave = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const { userPayload } = req.body;
	try {
		const responce = await recepieService.addToSave(id, userPayload.id);

		res.json(responce);
	} catch (err) {
		next(err);
	}
};

export default addToSave;

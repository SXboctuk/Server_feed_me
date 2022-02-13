import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const like = async (req: Request, res: Response, next: NextFunction) => {
	const { userPayload } = req.body;
	const { id } = req.params;
	try {
		res.send(await cookbookService.like(userPayload.id, id));
	} catch (err) {
		next(err);
	}
};

export default like;

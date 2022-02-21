import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const like = async (req: Request, res: Response, next: NextFunction) => {
	const { userPayload } = req.body;
	const { id } = req.params;
	try {
		const response = await cookbookService.like(userPayload.id, id);

		res.json(response);
	} catch (err) {
		next(err);
	}
};

export default like;

import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const addComment = async (req: Request, res: Response, next: NextFunction) => {
	const { userPayload, commentText, cookbookId } = req.body;
	try {
		res.send(
			await cookbookService.addComment(
				cookbookId,
				userPayload.id,
				commentText
			)
		);
	} catch (err) {
		next(err);
	}
};

export default addComment;

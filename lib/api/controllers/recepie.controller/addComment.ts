import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const addComment = async (req: Request, res: Response, next: NextFunction) => {
	const { userPayload, commentText, recepieId } = req.body;
	try {
		const comment = await recepieService.addComment(
			recepieId,
			userPayload.id,
			commentText
		);

		res.json({
			...comment,
		});
	} catch (err) {
		next(err);
	}
};

export default addComment;

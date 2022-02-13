import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const update = async (req: Request, res: Response, next: NextFunction) => {
	const {
		cookbookId,
		title,
		isVegatarian,
		isWithouEggs,
		isWithoutMilk,
		description,
		recepieIdList,
		userPayload,
	} = req.body;
	const image = req.files?.image;
	try {
		res.send(
			await cookbookService.update(
				cookbookId,
				image,
				title,
				isVegatarian,
				isWithoutMilk,
				isWithouEggs,
				description,
				recepieIdList,
				userPayload.id
			)
		);
	} catch (err) {
		next(err);
	}
};

export default update;

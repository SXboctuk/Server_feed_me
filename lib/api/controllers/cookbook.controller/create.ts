import { NextFunction, Request, Response } from "express";
import { commonUtils } from "../../../helpers";
import { cookbookService } from "../../services";

const create = async (req: Request, res: Response, next: NextFunction) => {
	const {
		title,
		isVegatarian,
		isWithoutEggs,
		isWithoutMilk,
		description,
		recepieIdList,
		userPayload,
	} = req.body;
	const image = req.files?.image;
	try {
		res.send(
			await cookbookService.create(
				image,
				title,
				isVegatarian,
				isWithoutMilk,
				isWithoutEggs,
				description,
				recepieIdList,
				userPayload.id
			)
		);
	} catch (err) {
		next(err);
	}
};

export default create;

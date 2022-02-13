import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const update = async (req: Request, res: Response, next: NextFunction) => {
	const {
		recepieId,
		title,
		ingredients,
		directions,
		description,
		cookingTime,
		userPayload,
	} = req.body;
	const image = req.files?.image;
	try {
		const recepie = await recepieService.update(
			recepieId,
			image,
			title,
			ingredients,
			directions,
			description,
			cookingTime,
			userPayload.id
		);

		res.json(recepie);
	} catch (err) {
		next(err);
	}
};

export default update;

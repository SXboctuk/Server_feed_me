import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const create = async (req: Request, res: Response, next: NextFunction) => {
	const {
		title,
		ingredients,
		directions,
		description,
		cookingTime,
		userPayload,
	} = req.body;
	const image = req.files?.image;
	try {
		const response = await recepieService.create(
			image,
			title,
			ingredients,
			directions,
			description,
			cookingTime,
			userPayload.id
		);

		res.json(response);
	} catch (err) {
		next(err);
	}
};

export default create;

import { body, check, param } from "express-validator";
import { MESSAGES } from "../../constants/messages";
import { checkError } from "./checkError.validator";

const addComment = [
	body("commentText").notEmpty().isString(),
	body("recepieId").notEmpty().isString(),
	checkError(),
];

const addToSave = [param("id").notEmpty().isString(), checkError()];

const create = [
	body("title").notEmpty().isString(),
	body("ingredients").notEmpty().isString(),
	body("directions").notEmpty().isString(),
	body("description").notEmpty().isString(),
	body("cookingTime").notEmpty().isString(),
	check().custom((value, { req }) => {
		const image: any = req.files?.image;
		if (!image) {
			throw new Error(MESSAGES.FILE.FILE_NOT_CATCH);
		}
		if (!image.mimetype.includes("image")) {
			throw new Error(MESSAGES.FILE.WRONG_FILE_FORMAT);
		}
		return true;
	}),
	checkError(),
];

const deleteById = [param("id").notEmpty().isString(), checkError()];

const get = [param("id").notEmpty().isString(), checkError()];

const like = [param("id").notEmpty().isString(), checkError()];

export const recepie = { addComment, addToSave, create, deleteById, get, like };

import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";

import { MESSAGES } from "../../constants/messages";
import { checkError } from "./checkError.validator";

const changeEmail = [body("newEmail").notEmpty().isString(), checkError()];

const changeImage = [
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

const changeName = [body("newName").notEmpty().isString(), checkError()];

const changePassword = [
	body("newPassword").notEmpty().isString(),
	checkError(),
];

const changeUserText = [
	body("newUserText").notEmpty().isString(),
	checkError(),
];

export const user = {
	changeEmail,
	changeImage,
	changeName,
	changePassword,
	changeUserText,
};

import { body } from "express-validator";
import { checkError } from "./checkError.validator";

const signIn = [
	body("email").notEmpty().isString(),
	body("password").notEmpty().isString(),
	checkError(),
];

const signUp = [
	body("username").notEmpty().isString(),
	body("email").notEmpty().isString(),
	body("password").notEmpty().isString(),
	body("repeatPassword").notEmpty().isString(),
	checkError(),
];

export const auth = { signIn, signUp };

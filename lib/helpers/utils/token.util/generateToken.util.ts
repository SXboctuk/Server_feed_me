import jwt from "jsonwebtoken";
import { AUTH } from "../../../constants/auth";

const generateToken = (payload: string | Buffer | object) => {
	let accessToken = jwt.sign(payload, AUTH.JWT_SECRET, {
		encoding: AUTH.TOKEN_ALGORITHM,
		expiresIn: AUTH.JWT_TOKEN_LIFE,
	});

	return accessToken;
};

export default generateToken;

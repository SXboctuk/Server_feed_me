import jwt from "jsonwebtoken";
import { AUTH } from "../../../constants/auth";

const generateToken = (payload: string | Buffer | object) => {
    const accessToken = jwt.sign(payload, AUTH.JWT_SECRET, {
        algorithm: AUTH.TOKEN_ALGORITHM,
        expiresIn: AUTH.JWT_TOKEN_LIFE,
    });

    return accessToken;
};

export default generateToken;

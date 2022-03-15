import jwt from "jsonwebtoken";
import { AUTH } from "../../../constants/auth";

const verifyToken = (token: string) => {
    return jwt.verify(token, AUTH.JWT_SECRET);
};

export default verifyToken;

import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { authServices } from "../../services";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const { token, account } = await authServices.signIn({
            email,
            password,
        });

        res.cookie("jwt", token, { httpOnly: false });

        return res.json({
            userName: account.name,
            id: account.id,
            role: "user",
            userText: account.userText,
            email: account.email,
            image: account.imagePath,
        });
    } catch (err) {
        next(err);
    }
};

export default signIn;

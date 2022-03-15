import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../../../constants/messages";
import { userServices } from "../../services";

const changeUserText = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { newUserText, userPayload } = req.body;
    try {
        const user = await userServices.changeUserText(
            newUserText,
            userPayload.id
        );
        res.json({
            message: MESSAGES.USER.CHANGED_SUCCESS,
            userText: user.dataValues.userText,
        });
    } catch (err) {
        next(err);
    }
};

export default changeUserText;

import { NextFunction, Request, Response } from "express";
import { userServices } from "../../services";

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userPayload } = req.body;
    try {
        res.json(await userServices.deleteUser(userPayload.id));
    } catch (err) {
        next(err);
    }
};

export default deleteUser;

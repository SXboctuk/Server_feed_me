import { NextFunction, Request, Response } from "express";
import { userServices } from "../../services";

const getUserRecepies = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    try {
        res.json(await userServices.getUserRecepies(id, req));
    } catch (err) {
        next(err);
    }
};

export default getUserRecepies;

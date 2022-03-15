import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const like = async (req: Request, res: Response, next: NextFunction) => {
    const { userPayload } = req.body;
    const { id } = req.params;
    try {
        const like = await recepieService.like(userPayload.id, id);

        res.json(like);
    } catch (err) {
        next(err);
    }
};

export default like;

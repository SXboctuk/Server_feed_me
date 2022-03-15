import { NextFunction, Request, Response } from "express";
import { recepieService } from "../../services";

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { userPayload } = req.body;
    try {
        const response = await recepieService.deleteById(id, userPayload.id);

        res.json(response);
    } catch (err) {
        next(err);
    }
};

export default deleteById;

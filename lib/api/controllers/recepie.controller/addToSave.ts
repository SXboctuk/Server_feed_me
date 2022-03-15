import { NextFunction, Request, Response } from "express";
import { copySync, cp } from "fs-extra";
import { recepieService } from "../../services";

const addToSave = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { userPayload } = req.body;
    try {
        const response = await recepieService.addToSave(id, userPayload.id);

        return res.json(response);
    } catch (err) {
        next(err);
    }
};

export default addToSave;

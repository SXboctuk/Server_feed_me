import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await cookbookService.getAll(req);

        res.json(data);
    } catch (err) {
        next(err);
    }
};

export default getAll;

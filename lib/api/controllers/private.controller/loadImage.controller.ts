import { NextFunction, Request, Response } from 'express';
import { privateService } from '../../services';

const loadImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.files?.image) {
            const result = await privateService.loadImage(req.files.image);

            res.json(result).end();
        } else {
            res.json({ message: 'image not found' }).end();
        }
    } catch (err) {
        next(err);
    }
};

export default loadImage;

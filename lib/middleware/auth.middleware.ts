import { NextFunction, Response, Request } from 'express';
import { tokenUtils } from '../helpers';

const verifyAuthToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (req.body.userPayload) {
            next();
            return;
        } else {
            return res.status(403).json({ message: 'auth error' }).end();
        }
    } catch (err) {
        return res.status(403).json({ message: 'auth middleware' }).end();
    }
};

export { verifyAuthToken };

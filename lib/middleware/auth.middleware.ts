import { NextFunction, Response, Request } from 'express';
import { tokenUtils } from '../helpers';

const verifyAuthToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.cookies['jwt'];

        if (!token) {
            return res.status(403).json({ message: 'auth error' }).end();
        }

        const userPayload = tokenUtils.verifyToken(token);

        req.body = {
            ...req.body,
            userPayload,
            token,
        };
        next();
    } catch (err) {
        return res.status(403).json({ message: 'auth middleware' }).end();
    }
};

export { verifyAuthToken };

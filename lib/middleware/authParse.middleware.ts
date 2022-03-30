import { NextFunction, Response, Request } from 'express';
import { tokenUtils } from '../helpers';

const authParse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.query.token || req.cookies['jwt'];

        if (!token) {
            next();
            return;
        }

        const userPayload = tokenUtils.verifyToken(token);

        req.body = {
            ...req.body,
            userPayload,
            token,
        };
        next();
    } catch (err) {
        return res.status(403).send({ message: 'auth Parse error', err }).end();
    }
};

export { authParse };

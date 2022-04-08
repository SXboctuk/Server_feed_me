import { NextFunction, Request, Response } from 'express';
import { authServices } from '../../services';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password, repeatPassword } = req.body;
        const { token, account } = await authServices.signUp({
            username,
            email,
            password,
            repeatPassword,
        });
        res.cookie('jwt', token);
        res.json({
            userName: account.name,
            id: account.id,
            role: 'user',
            userText: account.userText,
            email: account.email,
            image: account.imagePath,
            token: token,
        });
    } catch (err: any) {
        next(err);
    }
};

export default signUp;

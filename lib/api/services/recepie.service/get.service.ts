import { Request } from 'express';
import { tokenUtils } from '../../../helpers';
import db from '../../data-access/models';

const get = async (id: string, req: Request) => {
    const recepie = await db.Recepie.findByPk(
        id,
        {
            include: [
                'User',
                {
                    model: db.RecepieComment,
                    include: { model: db.User },
                },
            ],
        },
        // { include: "RecepieComments" }
    );
    // const token = req.cookies['jwt'];
    let userPayload: any = null;
    let isSavedRecepie = false;
    const likesCounter = await recepie.countRecepieUserLike();
    let isLike = false;
    const commentCounter = await recepie.countRecepieComments();

    if (req.body.userPayload) {
        //userPayload = tokenUtils.verifyToken(token);
        userPayload = req.body.userPayload;
        const user = await db.User.findByPk(userPayload.id);
        isSavedRecepie = await recepie.hasRecepieUserSave(user);
        isLike = await recepie.hasRecepieUserLike(user);
    }

    return {
        recepie,
        likesCounter: likesCounter,
        isLike: isLike,
        isSaved: isSavedRecepie,
        commentCounter: commentCounter,
    };
};

export default get;

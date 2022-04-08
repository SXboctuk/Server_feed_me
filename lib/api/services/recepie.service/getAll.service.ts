import { Request } from 'express';
import { tokenUtils } from '../../../helpers';
import { recepie } from '../../../helpers/validators/recepie.validator';
import db from '../../data-access/models';

const getAll = async (req: Request) => {
    const recepies = await db.Recepie.findAll({ include: 'User' });

    // const token = req.cookies["jwt"];

    let userPayload: any = null;
    if (req.body.userPayload) {
        //userPayload = tokenUtils.verifyToken(token);
        userPayload = req.body.userPayload;
        const user = await db.User.findByPk(userPayload.id);
        const userAuthData = await recepies.map(async (recepie: any) => {
            const isSavedRecepie = await recepie.hasRecepieUserSave(user);
            const likesCounter = await recepie.countRecepieUserLike();
            const isLike = await recepie.hasRecepieUserLike(user);
            const commentCounter = await recepie.countRecepieComments();

            return {
                ...recepie.dataValues,
                likesCounter: likesCounter,
                isLike: isLike,
                isSaved: isSavedRecepie,
                commentCounter: commentCounter,
            };
        });

        return Promise.all(userAuthData).then((values: any) => values);
    }

    return Promise.all(
        await recepies.map(async (recepie: any) => {
            const likesCounter = await recepie.countRecepieUserLike();
            const commentCounter = await recepie.countRecepieComments();
            return {
                ...recepie.dataValues,
                isSaved: false,
                isLike: false,
                likesCounter: likesCounter,
                commentCounter: commentCounter,
            };
        }),
    ).then((values: any) => values);
};

export default getAll;

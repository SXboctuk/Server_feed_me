import { Request } from "express";
import { tokenUtils } from "../../../helpers";
import db from "../../data-access/models";

const getUserRecepies = async (id: string, req: Request) => {
    const recepies = await db.User.findOne({
        where: { id: id },
    }).then((user: any) => user.getUserRecepieSave());

    const token = req.cookies["jwt"];

    let userPayload: any = null;
    if (token) {
        userPayload = tokenUtils.verifyToken(token);
        const user = await db.User.findByPk(userPayload.id);
        const userAuthData = await recepies.map(async (recepie: any) => {
            const isSavedRecepie = await recepie.hasRecepieUserSave(user);
            const likesCounter = await recepie.countRecepieUserLike();
            const isLike = await recepie.hasRecepieUserLike(user);
            const commentCounter = await recepie.countRecepieComments();
            const userData = await db.User.findByPk(recepie.UserId);
            return {
                ...recepie.dataValues,
                User: userData,
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
            const userData = await db.User.findByPk(recepie.UserId);
            return {
                ...recepie.dataValues,
                User: userData,
                isSaved: false,
                isLike: false,
                likesCounter: likesCounter,
                commentCounter: commentCounter,
            };
        })
    ).then((values: any) => values);
};
export default getUserRecepies;

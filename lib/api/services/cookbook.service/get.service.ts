import { Request } from "express";
import { tokenUtils } from "../../../helpers";
import db from "../../data-access/models";

const get = async (id: string, req: Request) => {
    const cookbook = await db.Cookbook.findByPk(id, {
        include: [
            "User",

            {
                model: db.CookbookComment,
                include: { model: db.User },
            },
        ],
    });

    const token = req.cookies["jwt"];
    let userPayload: any = null;
    let isSaved = false;
    const likesCounter = await cookbook.countCookbookUserLike();
    let isLike = false;
    const commentCounter = await cookbook.countCookbookComments();

    const recepies = await cookbook.getCookbookRecepie();

    let recepiesInCookbookData: any = [];
    if (token) {
        userPayload = tokenUtils.verifyToken(token);
        const user = await db.User.findByPk(userPayload.id);
        isSaved = await cookbook.hasCookbookUserSave(user);
        isLike = await cookbook.hasCookbookUserLike(user);

        const userAuthData = await recepies.map(async (recepie: any) => {
            const ownUser = await db.User.findByPk(recepie.UserId);
            const isSavedRecepie = await recepie.hasRecepieUserSave(user);
            const likesCounterRecepie = await recepie.countRecepieUserLike();
            const isLikeRecepie = await recepie.hasRecepieUserLike(user);
            const commentCounterRecepie = await recepie.countRecepieComments();

            return {
                ...recepie.dataValues,
                likesCounter: likesCounterRecepie,
                isLike: isLikeRecepie,
                isSaved: isSavedRecepie,
                commentCounter: commentCounterRecepie,
                User: ownUser,
            };
        });

        recepiesInCookbookData = Promise.all(userAuthData).then(
            (values: any) => values
        );
    }

    recepiesInCookbookData = Promise.all(
        await recepies.map(async (recepie: any) => {
            const likesCounterRecepie = await recepie.countRecepieUserLike();
            const commentCounterRecepie = await recepie.countRecepieComments();
            const ownUser = await db.User.findByPk(recepie.UserId);
            return {
                ...recepie.dataValues,
                isSaved: false,
                isLike: false,
                likesCounter: likesCounterRecepie,
                commentCounter: commentCounterRecepie,
                User: ownUser,
            };
        })
    ).then((values: any) => values);

    return {
        cookbook,
        likesCounter: likesCounter,
        isLike: isLike,
        isSaved: isSaved,
        commentCounter: commentCounter,
        recepies: await recepiesInCookbookData,
    };
};

export default get;

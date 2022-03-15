import { Request } from "express";
import { tokenUtils } from "../../../helpers";
import db from "../../data-access/models";

const getUserCookbooks = async (id: string, req: Request) => {
    const cookbooks = await db.User.findOne({
        where: { id: id },
    }).then((user: any) => user.getUserCookbookSave());

    const token = req.cookies["jwt"];

    let userPayload: any = null;
    if (token) {
        userPayload = tokenUtils.verifyToken(token);
        const user = await db.User.findByPk(userPayload.id);
        const userAuthData = await cookbooks.map(async (cookbook: any) => {
            const isSaved = await cookbook.hasCookbookUserSave(user);
            const likesCounter = await cookbook.countCookbookUserLike();
            const isLike = await cookbook.hasCookbookUserLike(user);
            const commentCounter = await cookbook.countCookbookComments();
            const userData = await db.User.findByPk(cookbook.UserId);

            return {
                ...cookbook.dataValues,
                User: userData,
                likesCounter: likesCounter,
                isLike: isLike,
                isSaved: isSaved,
                commentCounter: commentCounter,
            };
        });

        return Promise.all(userAuthData).then((values: any) => values);
    }

    return Promise.all(
        await cookbooks.map(async (cookbook: any) => {
            const likesCounter = await cookbook.countCookbookUserLike();
            const commentCounter = await cookbook.countCookbookComments();
            const userData = await db.User.findByPk(cookbook.UserId);
            return {
                ...cookbook.dataValues,
                User: userData,
                isSaved: false,
                isLike: false,
                likesCounter: likesCounter,
                commentCounter: commentCounter,
            };
        })
    ).then((values: any) => values);
};
export default getUserCookbooks;

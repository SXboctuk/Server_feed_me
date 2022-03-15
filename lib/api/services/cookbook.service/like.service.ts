import { ExternalError, InternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const like = async (userId: string, cookookId: string) => {
    return await db.Cookbook.findByPk(cookookId)
        .then(async (cookbook: any) => {
            if (!cookbook) {
                return { message: "cookbook not found" };
            }
            const user = await db.User.findByPk(userId);
            console.log(await cookbook.getCookbookUserLike());
            const save = await cookbook
                .hasCookbookUserLike(user)
                .catch((err: any) => {
                    throw new ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
            let counter;
            if (save) {
                await cookbook
                    .removeCookbookUserLike(user)
                    .catch((err: any) => {
                        throw new ExternalError({
                            message: err.message,
                            status: 403,
                        });
                    });
                counter = await cookbook.countCookbookUserLike();

                return { value: false, counter: counter };
            } else {
                await cookbook.addCookbookUserLike(user).catch((err: any) => {
                    throw new ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
                counter = await cookbook.countCookbookUserLike();
                return { value: true, counter: counter };
            }
        })
        .catch((err: any) => {
            throw new ExternalError({
                message: err.message,
                status: 403,
            });
        });
};

export default like;

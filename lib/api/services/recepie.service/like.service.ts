import { ExternalError, InternalError } from '../../../helpers/errors';
import db from '../../data-access/models';
import { Recepie } from '../../data-access/models/recepie';

const like = async (userId: string, recepieId: string) => {
    return await Recepie.findByPk(recepieId)
        .then(async (recepie: Recepie | null) => {
            if (recepie === null) {
                throw new ExternalError({
                    message: 'not Found recepie',
                    status: 404,
                });
            }
            const user = await db.User.findByPk(userId);
            const save = await recepie
                .hasRecepieUserLike(user)
                .catch((err: any) => {
                    throw new ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
            let counter;
            if (save) {
                await recepie.removeRecepieUserLike(user).catch((err: any) => {
                    throw new ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
                counter = await recepie.countRecepieUserLike();

                return { value: false, counter: counter };
            } else {
                await recepie.addRecepieUserLike(user).catch((err: any) => {
                    throw new ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
                counter = await recepie.countRecepieUserLike();
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

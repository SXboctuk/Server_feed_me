import db from '../../data-access/models';
import { v4 as uuidv4 } from 'uuid';
import { MFile } from '../../../helpers/utils/file.util/file.class';
import { fileUtil } from '../../../helpers/utils/file.util';
import { InternalError } from '../../../helpers/errors';
import { commonUtils } from '../../../helpers';

const create = async (
    image: any,
    title: string,
    isVegatarian: boolean,
    isWithoutMilk: boolean,
    isWithouEggs: boolean,
    description: string,
    recepieIdList: string,
    userId: string,
) => {
    let saveFile: MFile;
    const buffer = await fileUtil.convertToWebP(image.data);
    saveFile = new MFile(`${uuidv4()}.webp`, buffer);
    const savedFile = await fileUtil.saveFiles(saveFile, 'image');

    const uuidv4Id = uuidv4();
    return await db.Cookbook.create({
        id: uuidv4Id,
        imagePath: savedFile.url,
        title: title,
        description: description,
        isVegatarian: isVegatarian,
        isWithoutMilk: isWithoutMilk,
        isWithouEggs: isWithouEggs,
        view: 0,
        UserId: userId,
    })
        .then(async (cookbook: any) => {
            if (!cookbook) {
                return { message: 'errr create' };
            }
            return await db.User.findByPk(userId)
                .then(async (user: any) => {
                    if (!user) {
                        return { message: 'errr create cant find user' };
                    }
                    await cookbook.addCookbookUserSave(user);

                    await commonUtils
                        .safeJsonParse(recepieIdList)
                        .forEach(async (elem: any) => {
                            await db.Recepie.findByPk(elem)
                                .then(async (recepie: any) => {
                                    await cookbook.addCookbookRecepie(recepie);
                                })
                                .catch((err: any) => new InternalError(err));
                        });
                    return await cookbook;
                })
                .catch((err: any) => new InternalError(err));
        })
        .catch((err: any) => new InternalError(err));

    return await db.Cookbook.findByPk(uuidv4Id, { include: 'CookbookRecepie' });
};

export default create;

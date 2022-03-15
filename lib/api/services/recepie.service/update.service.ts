import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";
import { recepieService } from ".";
import { MFile } from "../../../helpers/utils/file.util/file.class";
import { fileUtil } from "../../../helpers/utils/file.util";
import { InternalError } from "../../../helpers/errors";
import { FileElementResponse } from "../../../helpers/utils/file.util/saveFiles.utils";

const update = async (
    recepieId: string,
    image: any,
    title: string,
    ingredients: string,
    directions: string,
    description: string,
    cookingTime: number,
    userId: string
) => {
    let savedFile: FileElementResponse;
    if (image) {
        let saveFile: MFile;
        const buffer = await fileUtil.convertToWebP(image.data);
        saveFile = new MFile(`${uuidv4()}.webp`, buffer);
        savedFile = await fileUtil.saveFiles(saveFile, "recepieImage");
    }

    const recepie = await db.Recepie.findByPk(recepieId)
        .then(async (recepie: any) => {
            if (!recepie) {
                return null;
            }
            if (recepie.UserId === userId) {
                return await recepie
                    .update({
                        imagePath: savedFile?.url || recepie.imagePath,
                        title: title || recepie.title,
                        ingredients: ingredients || recepie.ingredients,
                        directions: directions || recepie.directions,
                        description: description || recepie.description,
                        cookingTime: cookingTime || recepie.cookingTime,
                        view: recepie.view,
                    })
                    .catch((err: any) => new InternalError(err));
            } else {
                throw new InternalError();
            }
        })
        .catch((err: any) => new InternalError(err));

    return recepie;
};

export default update;

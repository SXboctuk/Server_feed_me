import { fileUtil } from "../../../helpers/utils/file.util";
import { MFile } from "../../../helpers/utils/file.util/file.class";
import { v4 as uuidv4 } from "uuid";
import db from "../../data-access/models";
import { ExternalError } from "../../../helpers/errors";
import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";

const changeImage = async (file: any, id: string) => {
    let saveFile: MFile;
    console.log(file);
    const buffer = await fileUtil.convertToWebP(file.data);
    saveFile = new MFile(`${uuidv4()}.webp`, buffer);
    const savedFile = await fileUtil.saveFiles(saveFile, "userAvatar");

    return await db.User.findOne({ where: { id: id } }).then((user: any) =>
        user.update({ imagePath: savedFile.url })
    );
};
export default changeImage;

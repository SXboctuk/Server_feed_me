import { CODE_STATUSES } from "../../../constants/code-statuses";
import { MESSAGES } from "../../../constants/messages";
import { ExternalError } from "../../../helpers/errors";
import db from "../../data-access/models";

const getUser = async (id: string) => {
    const user = await db.User.findOne({ where: { id: id } });

    return {
        id: user.id,
        userName: user.name,
        imageSrc: user.imagePath,
        userText: user.userText,
    };
};
export default getUser;

import db from "../../data-access/models";
import { v4 as uuidv4 } from "uuid";

const addComment = async (recepieId: string, userId: string, text: string) => {
    const newComment = await db.Recepie.findByPk(recepieId).then(
        async (recepie: any) => {
            if (!recepie) {
                return null;
            }

            return await db.User.findByPk(userId).then(async (user: any) => {
                if (!user) {
                    return null;
                }

                return await recepie.createRecepieComment({
                    id: uuidv4(),
                    text: text,
                    UserId: user.id,
                });
            });
        }
    );

    const userData = await newComment.getUser();
    const res = {
        imageSrc: userData.imagePath,
        userName: userData.name,
        userId: userData.id,
        createDate: new Date(newComment.createdAt),
        textComment: newComment.text,
    };

    return await res;
};

export default addComment;

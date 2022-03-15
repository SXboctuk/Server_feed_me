import db from "../../data-access/models";

const deleteById = async (recepieId: string, userId: string) => {
    return await db.Recepie.findByPk(recepieId).then(async (recepie: any) => {
        return await db.User.findByPk(userId).then(async (user: any) => {
            const isOwner = recepie.UserId === user.id;

            if (isOwner) {
                await recepie.destroy();
                return { message: "recepie deleted" };
            } else {
                if (await recepie.hasRecepieUserSave(user)) {
                    await recepie.removeRecepieUserSave(user);
                    return { message: "recepie removed from your storage" };
                } else {
                    return { message: "error recepie not found" };
                }
            }
        });
    });
};

export default deleteById;

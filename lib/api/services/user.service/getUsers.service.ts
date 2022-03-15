import db from "../../data-access/models";

const getUsers = async () => {
    const user = await db.User.findAll();

    return user.map((user: any) => {
        return {
            userName: user.name,
            id: user.id,
        };
    });
};
export default getUsers;

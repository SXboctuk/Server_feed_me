import db from "../../data-access/models";

const getUserCookbooks = async (id: string) => {
	return await db.User.findOne({
		where: { id: id },
	}).then((user: any) => user.getUserCookbookSave());
};
export default getUserCookbooks;

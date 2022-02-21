import db from "../../data-access/models";

const deleteUser = async (id: string) => {
	const user = await db.User.findOne({ where: { id: id } });

	await user.destroy();
	return { message: "user deleted" };
};
export default deleteUser;

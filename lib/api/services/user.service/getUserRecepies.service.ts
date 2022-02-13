import db from "../../data-access/models";

const getUserRecepies = async (id: string) => {
	// return await db.Recepie.findOne({ where: { UserId: id } });
	return await db.User.findOne({
		where: { id: id },
	}).then((user: any) => user.getUserRecepieSave());
};
export default getUserRecepies;

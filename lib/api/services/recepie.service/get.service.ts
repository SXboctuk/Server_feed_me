import db from "../../data-access/models";

const get = async (id: string) => {
	return await db.Recepie.findByPk(id);
};

export default get;

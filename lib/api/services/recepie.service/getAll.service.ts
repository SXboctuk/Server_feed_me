import db from "../../data-access/models";

const getAll = async () => {
	return await db.Recepie.findAll();
};

export default getAll;

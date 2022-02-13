import db from "../../data-access/models";

const getAll = async () => {
	return await db.Cookbook.findAll();
};

export default getAll;

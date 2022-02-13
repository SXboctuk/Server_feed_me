import db from "../../data-access/models";

const get = async (id: string) => {
	return await db.Cookbook.findByPk(id, { include: "CookbookRecepie" });
};

export default get;

import db from "../../data-access/models";

const deleteById = async (cookbookId: string, userId: string) => {
	return await db.Cookbook.findByPk(cookbookId).then(
		async (cookbook: any) => {
			return await db.User.findByPk(userId).then(async (user: any) => {
				const isOwner = cookbook.UserId === user.id;
				console.log(cookbook, user);
				if (isOwner) {
					await cookbook.destroy();
					return { message: "cookbook deleted" };
				} else {
					if (await cookbook.hasCookbookUserSave(user)) {
						await cookbook.removeCookbookUserSave(user);
						return {
							message: "cookbook removed from your storage",
						};
					} else {
						return { message: "error cookbook not found" };
					}
				}
			});
		}
	);
};

export default deleteById;

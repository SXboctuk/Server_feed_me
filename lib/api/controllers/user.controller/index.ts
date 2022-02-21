import changeEmail from "./changeEmail.controller";
import changeImage from "./changeImage.controller";
import changeName from "./changeName.controller";
import changePassword from "./changePassword.controller";
import changeUserText from "./changeUserText.controllet";
import deleteUser from "./deleteUser.controller";
import getUser from "./getUser.controller";
import getUserCookbooks from "./getUserCookbook.controller";
import getUserRecepies from "./getUserRecepies.controller";
import getUsers from "./getUsers.controller";

export const userControllers = {
	changeEmail,
	changeImage,
	changeName,
	changePassword,
	changeUserText,
	getUser,
	getUsers,
	getUserCookbooks,
	getUserRecepies,
	deleteUser,
};

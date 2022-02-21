import changeEmail from "./changeEmail.service";
import changeImage from "./changeImage.service";
import changeName from "./changeName.service";
import changePassword from "./changePassword.service";
import changeUserText from "./changeUserText.service";
import deleteUser from "./deleteUser.service";
import getUser from "./getUser.service";
import getUserCookbooks from "./getUserCookbooks.service";
import getUserRecepies from "./getUserRecepies.service";
import getUsers from "./getUsers.service";

export const userServices = {
	changeImage,
	changeEmail,
	changeName,
	changePassword,
	changeUserText,
	getUser,
	getUsers,
	getUserRecepies,
	getUserCookbooks,
	deleteUser,
};

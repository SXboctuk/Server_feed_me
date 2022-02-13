import changeEmail from "./changeEmail.service";
import changeImage from "./changeImage.service";
import changeName from "./changeName.service";
import changePassword from "./changePassword.service";
import changeUserText from "./changeUserText.service";
import getUser from "./getUser.service";
import getUserCookbooks from "./getUserCookbooks.service";
import getUserRecepies from "./getUserRecepies.service";

export const userServices = {
	changeImage,
	changeEmail,
	changeName,
	changePassword,
	changeUserText,
	getUser,
	getUserRecepies,
	getUserCookbooks,
};

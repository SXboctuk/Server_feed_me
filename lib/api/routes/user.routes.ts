import { Router } from "express";
import { validator } from "../../helpers/validators";
import { middlewares } from "../../middleware";
import { userControllers } from "../controllers";

const userRoute = Router();

userRoute.post(
	"/changeemail",
	middlewares.verifyAuthToken,
	...validator.user.changeEmail,
	userControllers.changeEmail
);
userRoute.post(
	"/changeimage",
	middlewares.verifyAuthToken,
	...validator.user.changeImage,
	userControllers.changeImage
);
userRoute.post(
	"/changename",
	middlewares.verifyAuthToken,
	...validator.user.changeName,
	userControllers.changeName
);
userRoute.post(
	"/changepassword",
	middlewares.verifyAuthToken,
	...validator.user.changePassword,
	userControllers.changePassword
);
userRoute.post(
	"/changeusertext",
	middlewares.verifyAuthToken,
	...validator.user.changeUserText,
	userControllers.changeUserText
);

userRoute.get("/get/:id", userControllers.getUser);
userRoute.get("/getrecepies/:id", userControllers.getUserRecepies);

userRoute.get("/getcookbooks/:id", userControllers.getUserCookbooks);

export default userRoute;

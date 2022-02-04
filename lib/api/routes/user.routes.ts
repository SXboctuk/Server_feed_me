import { Router } from "express";
import { middlewares } from "../../middleware";
import { userControllers } from "../controllers";

const userRoute = Router();

userRoute.post(
	"/changeemail",
	middlewares.verifyAuthToken,
	userControllers.changeEmail
);
userRoute.post(
	"/changeimage",
	middlewares.verifyAuthToken,
	userControllers.changeImage
);
userRoute.post(
	"/changename",
	middlewares.verifyAuthToken,
	userControllers.changeName
);
userRoute.post(
	"/changepassword",
	middlewares.verifyAuthToken,
	userControllers.changePassword
);
userRoute.post(
	"/changeusertext",
	middlewares.verifyAuthToken,
	userControllers.changeUserText
);

export default userRoute;

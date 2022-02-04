import { Router } from "express";
import { middlewares } from "../../middleware";
import { authControllers } from "../controllers";

const authRoute = Router();

authRoute.post("/sign-in", authControllers.signIn);
authRoute.post("/sign-up", authControllers.signUp);
authRoute.get(
	"/tokenAuth",
	middlewares.verifyAuthToken,
	authControllers.tokenAuth
);

export default authRoute;

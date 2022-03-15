import { Router } from "express";
import { validator } from "../../helpers/validators";
import { middlewares } from "../../middleware";
import { authControllers } from "../controllers";

const authRoute = Router();

authRoute.post("/sign-in", validator.auth.signIn, authControllers.signIn);
authRoute.post("/sign-up", validator.auth.signUp, authControllers.signUp);
authRoute.get(
    "/tokenAuth",
    middlewares.verifyAuthToken,
    authControllers.tokenAuth
);

export default authRoute;

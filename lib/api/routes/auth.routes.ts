import { Router } from "express";
import { authControllers } from "../controllers";

const authRoute = Router();

authRoute.post("/sign-in", authControllers.signIn);
authRoute.post("/sign-up", authControllers.signUp);

export default authRoute;

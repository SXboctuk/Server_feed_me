import { Router } from "express";
import authRoute from "./auth.routes";
import userRoute from "./user.routes";

const mainRoute = Router();

mainRoute.use("/auth", authRoute);
mainRoute.use("/user", userRoute);
export default mainRoute;

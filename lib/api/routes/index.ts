import { Router } from "express";
import authRoute from "./auth.routes";

const mainRoute = Router();

mainRoute.use("/auth", authRoute);

export default mainRoute;

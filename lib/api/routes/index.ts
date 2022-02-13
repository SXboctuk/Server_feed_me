import { Router } from "express";
import authRoute from "./auth.routes";
import cookbookRoute from "./cookbook.routes";
import recepieRoute from "./recepie.routes";
import userRoute from "./user.routes";

const mainRoute = Router();

mainRoute.use("/auth", authRoute);
mainRoute.use("/user", userRoute);
mainRoute.use("/recepie", recepieRoute);
mainRoute.use("/cookbook", cookbookRoute);

export default mainRoute;

import { Router } from "express";
import { validator } from "../../helpers";
import { middlewares } from "../../middleware";
import { recepieController } from "../controllers";

const recepieRoute = Router();

recepieRoute.post(
    "/create",
    middlewares.verifyAuthToken,
    ...validator.recepie.create,
    recepieController.create
);
recepieRoute.post(
    "/update",
    middlewares.verifyAuthToken,
    recepieController.update
);
recepieRoute.get(
    "/delete/:id",
    middlewares.verifyAuthToken,
    ...validator.recepie.deleteById,
    recepieController.deleteById
);
recepieRoute.get("/get/:id", ...validator.recepie.get, recepieController.get);
recepieRoute.get("/get", recepieController.getAll);
recepieRoute.post(
    "/addcomment",
    middlewares.verifyAuthToken,
    ...validator.recepie.addComment,
    recepieController.addComment
);
recepieRoute.get(
    "/like/:id",
    middlewares.verifyAuthToken,
    ...validator.recepie.like,
    recepieController.like
);
recepieRoute.get(
    "/addtosave/:id",
    middlewares.verifyAuthToken,
    ...validator.recepie.addToSave,
    recepieController.addToSave
);

export default recepieRoute;

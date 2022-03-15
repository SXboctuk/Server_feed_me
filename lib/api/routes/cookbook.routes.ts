import { Router } from "express";
import { validator } from "../../helpers/validators";
import { middlewares } from "../../middleware";
import { cookbookController } from "../controllers";

const cookbookRoute = Router();

cookbookRoute.post(
    "/create",
    middlewares.verifyAuthToken,
    ...validator.cookbook.create,
    cookbookController.create
);
cookbookRoute.post(
    "/update",
    middlewares.verifyAuthToken,
    cookbookController.update
);
cookbookRoute.get(
    "/delete/:id",
    middlewares.verifyAuthToken,
    ...validator.cookbook.deleteById,
    cookbookController.deleteById
);
cookbookRoute.get(
    "/get/:id",
    ...validator.cookbook.get,
    cookbookController.get
);
cookbookRoute.get("/get", cookbookController.getAll);
cookbookRoute.post(
    "/addcomment",
    middlewares.verifyAuthToken,
    ...validator.cookbook.addComment,
    cookbookController.addComment
);
cookbookRoute.get(
    "/like/:id",
    middlewares.verifyAuthToken,
    ...validator.cookbook.like,
    cookbookController.like
);
cookbookRoute.get(
    "/addtosave/:id",
    middlewares.verifyAuthToken,
    ...validator.cookbook.addToSave,
    cookbookController.addToSave
);
export default cookbookRoute;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helpers_1 = require("../../helpers");
const middleware_1 = require("../../middleware");
const controllers_1 = require("../controllers");
const recepieRoute = (0, express_1.Router)();
recepieRoute.post("/create", middleware_1.middlewares.verifyAuthToken, ...helpers_1.validator.recepie.create, controllers_1.recepieController.create);
recepieRoute.post("/update", middleware_1.middlewares.verifyAuthToken, controllers_1.recepieController.update);
recepieRoute.get("/delete/:id", middleware_1.middlewares.verifyAuthToken, ...helpers_1.validator.recepie.deleteById, controllers_1.recepieController.deleteById);
recepieRoute.get("/get/:id", ...helpers_1.validator.recepie.get, controllers_1.recepieController.get);
recepieRoute.get("/get", controllers_1.recepieController.getAll);
recepieRoute.post("/addcomment", middleware_1.middlewares.verifyAuthToken, ...helpers_1.validator.recepie.addComment, controllers_1.recepieController.addComment);
recepieRoute.get("/like/:id", middleware_1.middlewares.verifyAuthToken, ...helpers_1.validator.recepie.like, controllers_1.recepieController.like);
recepieRoute.get("/addtosave/:id", middleware_1.middlewares.verifyAuthToken, ...helpers_1.validator.recepie.addToSave, controllers_1.recepieController.addToSave);
exports.default = recepieRoute;
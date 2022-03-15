"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../../helpers/validators");
const middleware_1 = require("../../middleware");
const controllers_1 = require("../controllers");
const userRoute = (0, express_1.Router)();
userRoute.post("/changeemail", middleware_1.middlewares.verifyAuthToken, ...validators_1.validator.user.changeEmail, controllers_1.userControllers.changeEmail);
userRoute.post("/changeimage", middleware_1.middlewares.verifyAuthToken, 
// ...validator.user.changeImage,
controllers_1.userControllers.changeImage);
userRoute.post("/changename", middleware_1.middlewares.verifyAuthToken, ...validators_1.validator.user.changeName, controllers_1.userControllers.changeName);
userRoute.post("/changepassword", middleware_1.middlewares.verifyAuthToken, ...validators_1.validator.user.changePassword, controllers_1.userControllers.changePassword);
userRoute.post("/changeusertext", middleware_1.middlewares.verifyAuthToken, ...validators_1.validator.user.changeUserText, controllers_1.userControllers.changeUserText);
userRoute.get("/get/:id", controllers_1.userControllers.getUser);
userRoute.get("/get", controllers_1.userControllers.getUsers);
userRoute.get("/getrecepies/:id", controllers_1.userControllers.getUserRecepies);
userRoute.get("/getcookbooks/:id", controllers_1.userControllers.getUserCookbooks);
userRoute.get("/deleteuser", middleware_1.middlewares.verifyAuthToken, controllers_1.userControllers.deleteUser);
exports.default = userRoute;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const changeEmail_controller_1 = __importDefault(require("./changeEmail.controller"));
const changeImage_controller_1 = __importDefault(require("./changeImage.controller"));
const changeName_controller_1 = __importDefault(require("./changeName.controller"));
const changePassword_controller_1 = __importDefault(require("./changePassword.controller"));
const changeUserText_controllet_1 = __importDefault(require("./changeUserText.controllet"));
const deleteUser_controller_1 = __importDefault(require("./deleteUser.controller"));
const getUser_controller_1 = __importDefault(require("./getUser.controller"));
const getUserCookbook_controller_1 = __importDefault(require("./getUserCookbook.controller"));
const getUserRecepies_controller_1 = __importDefault(require("./getUserRecepies.controller"));
const getUsers_controller_1 = __importDefault(require("./getUsers.controller"));
exports.userControllers = {
    changeEmail: changeEmail_controller_1.default,
    changeImage: changeImage_controller_1.default,
    changeName: changeName_controller_1.default,
    changePassword: changePassword_controller_1.default,
    changeUserText: changeUserText_controllet_1.default,
    getUser: getUser_controller_1.default,
    getUsers: getUsers_controller_1.default,
    getUserCookbooks: getUserCookbook_controller_1.default,
    getUserRecepies: getUserRecepies_controller_1.default,
    deleteUser: deleteUser_controller_1.default,
};

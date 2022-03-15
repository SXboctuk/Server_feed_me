"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const changeEmail_service_1 = __importDefault(require("./changeEmail.service"));
const changeImage_service_1 = __importDefault(require("./changeImage.service"));
const changeName_service_1 = __importDefault(require("./changeName.service"));
const changePassword_service_1 = __importDefault(require("./changePassword.service"));
const changeUserText_service_1 = __importDefault(require("./changeUserText.service"));
const deleteUser_service_1 = __importDefault(require("./deleteUser.service"));
const getUser_service_1 = __importDefault(require("./getUser.service"));
const getUserCookbooks_service_1 = __importDefault(require("./getUserCookbooks.service"));
const getUserRecepies_service_1 = __importDefault(require("./getUserRecepies.service"));
const getUsers_service_1 = __importDefault(require("./getUsers.service"));
exports.userServices = {
    changeImage: changeImage_service_1.default,
    changeEmail: changeEmail_service_1.default,
    changeName: changeName_service_1.default,
    changePassword: changePassword_service_1.default,
    changeUserText: changeUserText_service_1.default,
    getUser: getUser_service_1.default,
    getUsers: getUsers_service_1.default,
    getUserRecepies: getUserRecepies_service_1.default,
    getUserCookbooks: getUserCookbooks_service_1.default,
    deleteUser: deleteUser_service_1.default,
};

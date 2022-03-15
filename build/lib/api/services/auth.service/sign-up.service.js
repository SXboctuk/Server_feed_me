"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../constants/messages");
const errors_1 = require("../../../helpers/errors");
const auth_util_1 = require("../../../helpers/utils/auth.util");
const models_1 = __importDefault(require("../../data-access/models"));
const uuid_1 = require("uuid");
const signUp = ({ username, email, password, repeatPassword, }) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO it in validator
    const isPasswordsMatched = password === repeatPassword;
    if (!isPasswordsMatched) {
        throw new errors_1.AuthError({
            message: "Password and repeat password are differ.",
        });
    }
    const user = yield models_1.default.User.findOne({ where: { email: email } });
    if ((user === null || user === void 0 ? void 0 : user.dataValues.email) === email) {
        throw new errors_1.AuthError({ message: messages_1.MESSAGES.AUTH.ERROR.EMAIL_EXISTS });
    }
    const encryptedPassword = auth_util_1.authUtils.encryptPassword(password);
    const account = yield models_1.default.User.create({
        id: (0, uuid_1.v4)(),
        imagePath: "imagepath/",
        name: username,
        email: email,
        userText: "Non",
        passwordHash: encryptedPassword,
    });
    const token = auth_util_1.authUtils.generateAuthToken({
        email: account.email,
        id: account.id,
    });
    return {
        account,
        token,
    };
});
exports.default = signUp;

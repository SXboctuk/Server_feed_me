"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_validator_1 = require("express-validator");
const messages_1 = require("../../constants/messages");
const checkError_validator_1 = require("./checkError.validator");
const changeEmail = [(0, express_validator_1.body)("newEmail").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
const changeImage = [
    (0, express_validator_1.check)().custom((value, { req }) => {
        var _a;
        const image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
        if (!image) {
            throw new Error(messages_1.MESSAGES.FILE.FILE_NOT_CATCH);
        }
        if (!image.mimetype.includes("image")) {
            throw new Error(messages_1.MESSAGES.FILE.WRONG_FILE_FORMAT);
        }
        return true;
    }),
    (0, checkError_validator_1.checkError)(),
];
const changeName = [(0, express_validator_1.body)("newName").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
const changePassword = [
    (0, express_validator_1.body)("newPassword").notEmpty().isString(),
    (0, checkError_validator_1.checkError)(),
];
const changeUserText = [
    (0, express_validator_1.body)("newUserText").notEmpty().isString(),
    (0, checkError_validator_1.checkError)(),
];
exports.user = {
    changeEmail,
    changeImage,
    changeName,
    changePassword,
    changeUserText,
};

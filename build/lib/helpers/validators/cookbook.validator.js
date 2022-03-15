"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookbook = void 0;
const express_validator_1 = require("express-validator");
const messages_1 = require("../../constants/messages");
const checkError_validator_1 = require("./checkError.validator");
const addComment = [
    (0, express_validator_1.body)("commentText").notEmpty().isString(),
    (0, express_validator_1.body)("cookbookId").notEmpty().isString(),
    (0, checkError_validator_1.checkError)(),
];
const addToSave = [(0, express_validator_1.param)("id").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
const create = [
    (0, express_validator_1.body)("title").notEmpty().isString(),
    (0, express_validator_1.body)("description").notEmpty().isString(),
    (0, express_validator_1.body)("isVegatarian").notEmpty().isBoolean(),
    (0, express_validator_1.body)("isWithoutEggs").notEmpty().isString(),
    (0, express_validator_1.body)("isWithoutMilk").notEmpty().isString(),
    (0, express_validator_1.body)("recepieIdList").notEmpty().isString(),
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
const deleteById = [(0, express_validator_1.param)("id").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
const get = [(0, express_validator_1.param)("id").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
const like = [(0, express_validator_1.param)("id").notEmpty().isString(), (0, checkError_validator_1.checkError)()];
exports.cookbook = {
    addComment,
    addToSave,
    create,
    deleteById,
    get,
    like,
};

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
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../constants/messages");
const services_1 = require("../../services");
const changeUserText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { newUserText, userPayload } = req.body;
    try {
        const user = yield services_1.userServices.changeUserText(newUserText, userPayload.id);
        res.json({
            message: messages_1.MESSAGES.USER.CHANGED_SUCCESS,
            userText: user.dataValues.userText,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.default = changeUserText;

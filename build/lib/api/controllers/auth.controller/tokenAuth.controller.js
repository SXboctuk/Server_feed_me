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
const services_1 = require("../../services");
const tokenAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userPayload } = req.body;
        const { token, account } = yield services_1.authServices.tokenAuth(userPayload.id);
        res.cookie("jwt", token, { httpOnly: false });
        return res.json({
            userName: account.name,
            id: account.id,
            role: "user",
            userText: account.userText,
            email: account.email,
            image: account.imagePath,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.default = tokenAuth;

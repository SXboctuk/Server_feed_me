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
const helpers_1 = require("../../../helpers");
const models_1 = __importDefault(require("../../data-access/models"));
const get = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    const recepie = yield models_1.default.Recepie.findByPk(id, {
        include: [
            "User",
            {
                model: models_1.default.RecepieComment,
                include: { model: models_1.default.User },
            },
        ],
    }
    // { include: "RecepieComments" }
    );
    const token = req.cookies["jwt"];
    let userPayload = null;
    let isSavedRecepie = false;
    const likesCounter = yield recepie.countRecepieUserLike();
    let isLike = false;
    const commentCounter = yield recepie.countRecepieComments();
    if (token) {
        userPayload = helpers_1.tokenUtils.verifyToken(token);
        const user = yield models_1.default.User.findByPk(userPayload.id);
        isSavedRecepie = yield recepie.hasRecepieUserSave(user);
        isLike = yield recepie.hasRecepieUserLike(user);
    }
    return {
        recepie,
        likesCounter: likesCounter,
        isLike: isLike,
        isSaved: isSavedRecepie,
        commentCounter: commentCounter,
    };
});
exports.default = get;

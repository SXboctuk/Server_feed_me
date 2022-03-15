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
const models_1 = __importDefault(require("../../data-access/models"));
const uuid_1 = require("uuid");
const addComment = (recepieId, userId, text) => __awaiter(void 0, void 0, void 0, function* () {
    const newComment = yield models_1.default.Recepie.findByPk(recepieId).then((recepie) => __awaiter(void 0, void 0, void 0, function* () {
        if (!recepie) {
            return null;
        }
        return yield models_1.default.User.findByPk(userId).then((user) => __awaiter(void 0, void 0, void 0, function* () {
            if (!user) {
                return null;
            }
            return yield recepie.createRecepieComment({
                id: (0, uuid_1.v4)(),
                text: text,
                UserId: user.id,
            });
        }));
    }));
    const userData = yield newComment.getUser();
    const res = {
        imageSrc: userData.imagePath,
        userName: userData.name,
        userId: userData.id,
        createDate: new Date(newComment.createdAt),
        textComment: newComment.text,
    };
    return yield res;
});
exports.default = addComment;

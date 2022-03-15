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
    const cookbook = yield models_1.default.Cookbook.findByPk(id, {
        include: [
            "User",
            {
                model: models_1.default.CookbookComment,
                include: { model: models_1.default.User },
            },
        ],
    });
    const token = req.cookies["jwt"];
    let userPayload = null;
    let isSaved = false;
    const likesCounter = yield cookbook.countCookbookUserLike();
    let isLike = false;
    const commentCounter = yield cookbook.countCookbookComments();
    const recepies = yield cookbook.getCookbookRecepie();
    let recepiesInCookbookData = [];
    if (token) {
        userPayload = helpers_1.tokenUtils.verifyToken(token);
        const user = yield models_1.default.User.findByPk(userPayload.id);
        isSaved = yield cookbook.hasCookbookUserSave(user);
        isLike = yield cookbook.hasCookbookUserLike(user);
        const userAuthData = yield recepies.map((recepie) => __awaiter(void 0, void 0, void 0, function* () {
            const ownUser = yield models_1.default.User.findByPk(recepie.UserId);
            const isSavedRecepie = yield recepie.hasRecepieUserSave(user);
            const likesCounterRecepie = yield recepie.countRecepieUserLike();
            const isLikeRecepie = yield recepie.hasRecepieUserLike(user);
            const commentCounterRecepie = yield recepie.countRecepieComments();
            return Object.assign(Object.assign({}, recepie.dataValues), { likesCounter: likesCounterRecepie, isLike: isLikeRecepie, isSaved: isSavedRecepie, commentCounter: commentCounterRecepie, User: ownUser });
        }));
        recepiesInCookbookData = Promise.all(userAuthData).then((values) => values);
    }
    recepiesInCookbookData = Promise.all(yield recepies.map((recepie) => __awaiter(void 0, void 0, void 0, function* () {
        const likesCounterRecepie = yield recepie.countRecepieUserLike();
        const commentCounterRecepie = yield recepie.countRecepieComments();
        const ownUser = yield models_1.default.User.findByPk(recepie.UserId);
        return Object.assign(Object.assign({}, recepie.dataValues), { isSaved: false, isLike: false, likesCounter: likesCounterRecepie, commentCounter: commentCounterRecepie, User: ownUser });
    }))).then((values) => values);
    return {
        cookbook,
        likesCounter: likesCounter,
        isLike: isLike,
        isSaved: isSaved,
        commentCounter: commentCounter,
        recepies: yield recepiesInCookbookData,
    };
});
exports.default = get;

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
const getUserCookbooks = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    const cookbooks = yield models_1.default.User.findOne({
        where: { id: id },
    }).then((user) => user.getUserCookbookSave());
    const token = req.cookies["jwt"];
    let userPayload = null;
    if (token) {
        userPayload = helpers_1.tokenUtils.verifyToken(token);
        const user = yield models_1.default.User.findByPk(userPayload.id);
        const userAuthData = yield cookbooks.map((cookbook) => __awaiter(void 0, void 0, void 0, function* () {
            const isSaved = yield cookbook.hasCookbookUserSave(user);
            const likesCounter = yield cookbook.countCookbookUserLike();
            const isLike = yield cookbook.hasCookbookUserLike(user);
            const commentCounter = yield cookbook.countCookbookComments();
            const userData = yield models_1.default.User.findByPk(cookbook.UserId);
            return Object.assign(Object.assign({}, cookbook.dataValues), { User: userData, likesCounter: likesCounter, isLike: isLike, isSaved: isSaved, commentCounter: commentCounter });
        }));
        return Promise.all(userAuthData).then((values) => values);
    }
    return Promise.all(yield cookbooks.map((cookbook) => __awaiter(void 0, void 0, void 0, function* () {
        const likesCounter = yield cookbook.countCookbookUserLike();
        const commentCounter = yield cookbook.countCookbookComments();
        const userData = yield models_1.default.User.findByPk(cookbook.UserId);
        return Object.assign(Object.assign({}, cookbook.dataValues), { User: userData, isSaved: false, isLike: false, likesCounter: likesCounter, commentCounter: commentCounter });
    }))).then((values) => values);
});
exports.default = getUserCookbooks;

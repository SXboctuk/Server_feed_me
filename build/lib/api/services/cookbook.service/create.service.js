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
const file_class_1 = require("../../../helpers/utils/file.util/file.class");
const file_util_1 = require("../../../helpers/utils/file.util");
const errors_1 = require("../../../helpers/errors");
const helpers_1 = require("../../../helpers");
const create = (image, title, isVegatarian, isWithoutMilk, isWithouEggs, description, recepieIdList, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let saveFile;
    const buffer = yield file_util_1.fileUtil.convertToWebP(image.data);
    saveFile = new file_class_1.MFile(`${(0, uuid_1.v4)()}.webp`, buffer);
    const savedFile = yield file_util_1.fileUtil.saveFiles(saveFile, "cookbookImage");
    const uuidv4Id = (0, uuid_1.v4)();
    return yield models_1.default.Cookbook.create({
        id: uuidv4Id,
        imagePath: savedFile.url,
        title: title,
        description: description,
        isVegatarian: isVegatarian,
        isWithoutMilk: isWithoutMilk,
        isWithouEggs: isWithouEggs,
        view: 0,
        UserId: userId,
    })
        .then((cookbook) => __awaiter(void 0, void 0, void 0, function* () {
        if (!cookbook) {
            return { message: "errr create" };
        }
        return yield models_1.default.User.findByPk(userId)
            .then((user) => __awaiter(void 0, void 0, void 0, function* () {
            if (!user) {
                return { message: "errr create cant find user" };
            }
            yield cookbook.addCookbookUserSave(user);
            yield helpers_1.commonUtils
                .safeJsonParse(recepieIdList)
                .forEach((elem) => __awaiter(void 0, void 0, void 0, function* () {
                yield models_1.default.Recepie.findByPk(elem)
                    .then((recepie) => __awaiter(void 0, void 0, void 0, function* () {
                    yield cookbook.addCookbookRecepie(recepie);
                }))
                    .catch((err) => new errors_1.InternalError(err));
            }));
            return yield cookbook;
        }))
            .catch((err) => new errors_1.InternalError(err));
    }))
        .catch((err) => new errors_1.InternalError(err));
    return yield models_1.default.Cookbook.findByPk(uuidv4Id, { include: "CookbookRecepie" });
});
exports.default = create;

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
const update = (cookbookId, image, title, isVegatarian, isWithoutMilk, isWithouEggs, description, recepieIdList, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let savedFile;
    if (image) {
        let saveFile;
        const buffer = yield file_util_1.fileUtil.convertToWebP(image.data);
        saveFile = new file_class_1.MFile(`${(0, uuid_1.v4)()}.webp`, buffer);
        savedFile = yield file_util_1.fileUtil.saveFiles(saveFile, "recepieImage");
    }
    const cookbook = yield models_1.default.Cookbook.findByPk(cookbookId)
        .then((cookbook) => __awaiter(void 0, void 0, void 0, function* () {
        if (!cookbook) {
            return { message: "cookbook not found" };
        }
        if (cookbook.UserId === userId) {
            yield cookbook
                .update({
                imagePath: (savedFile === null || savedFile === void 0 ? void 0 : savedFile.url) || cookbook.imagePath,
                title: title || cookbook.title,
                description: description || cookbook.description,
                isVegatarian: isVegatarian || cookbook.isVegatarian,
                isWithoutMilk: isWithoutMilk || cookbook.isWithoutMilk,
                isWithouEggs: isWithouEggs || cookbook.isWithouEggs,
                view: cookbook.view,
            })
                .catch((err) => new errors_1.InternalError(err));
            if (recepieIdList) {
                const recepieList = yield helpers_1.commonUtils.safeJsonParse(recepieIdList);
                if (recepieList && recepieList.length > 0) {
                    yield cookbook.removeCookbookRecepie(yield cookbook.getCookbookRecepie());
                    recepieList.forEach((elem) => __awaiter(void 0, void 0, void 0, function* () {
                        yield models_1.default.Recepie.findByPk(elem)
                            .then((recepie) => __awaiter(void 0, void 0, void 0, function* () {
                            yield cookbook.addCookbookRecepie(recepie);
                        }))
                            .catch((err) => new errors_1.InternalError(err));
                    }));
                }
            }
            return yield models_1.default.Cookbook.findByPk(cookbook.id, {
                include: "CookbookRecepie",
            });
        }
        else {
            throw new errors_1.InternalError();
        }
    }))
        .catch((err) => new errors_1.InternalError(err));
    return cookbook;
});
exports.default = update;

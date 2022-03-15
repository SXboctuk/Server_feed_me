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
const update = (recepieId, image, title, ingredients, directions, description, cookingTime, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let savedFile;
    if (image) {
        let saveFile;
        const buffer = yield file_util_1.fileUtil.convertToWebP(image.data);
        saveFile = new file_class_1.MFile(`${(0, uuid_1.v4)()}.webp`, buffer);
        savedFile = yield file_util_1.fileUtil.saveFiles(saveFile, "recepieImage");
    }
    const recepie = yield models_1.default.Recepie.findByPk(recepieId)
        .then((recepie) => __awaiter(void 0, void 0, void 0, function* () {
        if (!recepie) {
            return null;
        }
        if (recepie.UserId === userId) {
            return yield recepie
                .update({
                imagePath: (savedFile === null || savedFile === void 0 ? void 0 : savedFile.url) || recepie.imagePath,
                title: title || recepie.title,
                ingredients: ingredients || recepie.ingredients,
                directions: directions || recepie.directions,
                description: description || recepie.description,
                cookingTime: cookingTime || recepie.cookingTime,
                view: recepie.view,
            })
                .catch((err) => new errors_1.InternalError(err));
        }
        else {
            throw new errors_1.InternalError();
        }
    }))
        .catch((err) => new errors_1.InternalError(err));
    return recepie;
});
exports.default = update;

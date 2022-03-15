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
const file_util_1 = require("../../../helpers/utils/file.util");
const file_class_1 = require("../../../helpers/utils/file.util/file.class");
const uuid_1 = require("uuid");
const models_1 = __importDefault(require("../../data-access/models"));
const changeImage = (file, id) => __awaiter(void 0, void 0, void 0, function* () {
    let saveFile;
    console.log(file);
    const buffer = yield file_util_1.fileUtil.convertToWebP(file.data);
    saveFile = new file_class_1.MFile(`${(0, uuid_1.v4)()}.webp`, buffer);
    const savedFile = yield file_util_1.fileUtil.saveFiles(saveFile, "userAvatar");
    return yield models_1.default.User.findOne({ where: { id: id } }).then((user) => user.update({ imagePath: savedFile.url }));
});
exports.default = changeImage;

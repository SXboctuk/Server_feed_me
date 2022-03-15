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
exports.saveFiles = void 0;
const app_root_path_1 = require("app-root-path");
const fs_extra_1 = require("fs-extra");
const saveFiles = (file, dataFolderName) => __awaiter(void 0, void 0, void 0, function* () {
    const dateFolder = dataFolderName;
    const uploadFolder = `${app_root_path_1.path}/uploads/${dateFolder}`;
    yield (0, fs_extra_1.ensureDir)(uploadFolder);
    let res;
    yield (0, fs_extra_1.writeFile)(`${uploadFolder}/${file.originalname}`, file.buffer);
    res = {
        url: `http://localhost:3000/uploads/${dateFolder}/${file.originalname}`,
        name: file.originalname,
    };
    return res;
});
exports.saveFiles = saveFiles;

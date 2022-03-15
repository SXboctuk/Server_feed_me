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
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { title, ingredients, directions, description, cookingTime, userPayload, } = req.body;
    const image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
    try {
        const response = yield services_1.recepieService.create(image, title, ingredients, directions, description, cookingTime, userPayload.id);
        res.json(response);
    }
    catch (err) {
        next(err);
    }
});
exports.default = create;

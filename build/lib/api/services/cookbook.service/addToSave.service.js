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
const errors_1 = require("../../../helpers/errors");
const models_1 = __importDefault(require("../../data-access/models"));
const addToSave = (cookbookId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.Cookbook.findByPk(cookbookId)
        .then((cookbook) => __awaiter(void 0, void 0, void 0, function* () {
        return yield models_1.default.User.findByPk(userId)
            .then((user) => __awaiter(void 0, void 0, void 0, function* () {
            const isCookbookSaved = yield user
                .hasUserCookbookSave(cookbook)
                .catch((err) => {
                throw new errors_1.ExternalError({
                    message: err.message,
                    status: 403,
                });
            });
            if (isCookbookSaved) {
                return { message: "This cookbook already added" };
            }
            else {
                return yield user
                    .addUserCookbookSave(cookbook)
                    .catch((err) => {
                    throw new errors_1.ExternalError({
                        message: err.message,
                        status: 403,
                    });
                });
            }
        }))
            .catch((err) => {
            throw new errors_1.ExternalError({
                message: err.message,
                status: 403,
            });
        });
    }))
        .catch((err) => {
        throw new errors_1.ExternalError({
            message: err.message,
            status: 403,
        });
    });
});
exports.default = addToSave;

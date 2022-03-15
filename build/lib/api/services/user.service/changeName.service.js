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
const code_statuses_1 = require("../../../constants/code-statuses");
const messages_1 = require("../../../constants/messages");
const errors_1 = require("../../../helpers/errors");
const models_1 = __importDefault(require("../../data-access/models"));
const changeName = (newName, id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.User.findOne({ where: { id: id } });
    if (user.name === newName) {
        throw new errors_1.ExternalError({
            message: messages_1.MESSAGES.USER.VALUE_IS_SAME,
            status: code_statuses_1.CODE_STATUSES.BAD_REQUEST,
        });
    }
    return yield models_1.default.User.findOne({ where: { id: id } }).then((user) => user.update({ name: newName }));
});
exports.default = changeName;

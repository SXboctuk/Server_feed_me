"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookbookService = void 0;
const addComment_service_1 = __importDefault(require("./addComment.service"));
const addToSave_service_1 = __importDefault(require("./addToSave.service"));
const create_service_1 = __importDefault(require("./create.service"));
const deleteById_service_1 = __importDefault(require("./deleteById.service"));
const get_service_1 = __importDefault(require("./get.service"));
const getAll_service_1 = __importDefault(require("./getAll.service"));
const like_service_1 = __importDefault(require("./like.service"));
const update_service_1 = __importDefault(require("./update.service"));
exports.cookbookService = {
    create: create_service_1.default,
    deleteById: deleteById_service_1.default,
    get: get_service_1.default,
    update: update_service_1.default,
    addComment: addComment_service_1.default,
    like: like_service_1.default,
    addToSave: addToSave_service_1.default,
    getAll: getAll_service_1.default,
};

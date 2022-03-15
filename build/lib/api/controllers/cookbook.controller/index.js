"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookbookController = void 0;
const addComment_1 = __importDefault(require("./addComment"));
const addToSave_1 = __importDefault(require("./addToSave"));
const create_1 = __importDefault(require("./create"));
const deleteById_1 = __importDefault(require("./deleteById"));
const get_1 = __importDefault(require("./get"));
const getAll_1 = __importDefault(require("./getAll"));
const like_1 = __importDefault(require("./like"));
const update_1 = __importDefault(require("./update"));
exports.cookbookController = {
    create: create_1.default,
    deleteById: deleteById_1.default,
    update: update_1.default,
    get: get_1.default,
    addComment: addComment_1.default,
    like: like_1.default,
    addToSave: addToSave_1.default,
    getAll: getAll_1.default,
};

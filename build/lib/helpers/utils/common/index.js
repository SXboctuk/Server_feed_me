"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonUtils = void 0;
const safeJsonParse_util_1 = __importDefault(require("./safeJsonParse.util"));
const safeJsonStringify_util_1 = __importDefault(require("./safeJsonStringify.util"));
exports.commonUtils = { safeJsonParse: safeJsonParse_util_1.default, safeJsonStringify: safeJsonStringify_util_1.default };

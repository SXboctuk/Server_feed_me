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
const errors_1 = require("../helpers/errors");
const errorMiddleware = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (err) {
        let internalError;
        let publicError;
        const status = err.status;
        if (err instanceof Error) {
            internalError = new errors_1.InternalError(err);
            publicError = new errors_1.ExternalError({
                status: status,
                message: err.message,
            });
        }
        else {
            publicError = new errors_1.ExternalError({
                status: err.status,
                message: err.message,
            });
        }
        res.status(publicError.status).json({ message: publicError.message });
        if (internalError) {
            console.log("internalError", internalError);
        }
    }
});
exports.default = errorMiddleware;

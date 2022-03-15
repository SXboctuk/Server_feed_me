"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const cookbook_routes_1 = __importDefault(require("./cookbook.routes"));
const recepie_routes_1 = __importDefault(require("./recepie.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const mainRoute = (0, express_1.Router)();
mainRoute.use("/auth", auth_routes_1.default);
mainRoute.use("/user", user_routes_1.default);
mainRoute.use("/recepie", recepie_routes_1.default);
mainRoute.use("/cookbook", cookbook_routes_1.default);
exports.default = mainRoute;

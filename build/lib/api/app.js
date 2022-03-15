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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../constants/config");
const middleware_1 = require("../middleware");
const models_1 = __importDefault(require("./data-access/models"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const seedData_1 = require("./data-access/seedData");
class App {
    constructor() {
        this.client = (0, express_1.default)();
    }
    connectStatic() {
        this.client.use("/uploads", express_1.default.static("uploads"));
    }
    connectCors() {
        this.client.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:8080" }));
    }
    //{ force: true }
    connectDb() {
        models_1.default.sequelize.sync({ force: true }).then(() => __awaiter(this, void 0, void 0, function* () {
            // seed data
            seedData_1.seedData.users.forEach((elem) => __awaiter(this, void 0, void 0, function* () {
                yield models_1.default.User.create(elem);
            }));
            seedData_1.seedData.recepies.forEach((elem) => __awaiter(this, void 0, void 0, function* () {
                const recepie = yield models_1.default.Recepie.create(elem).catch((err) => console.log(err));
                const user = yield models_1.default.User.findByPk(elem.UserId);
                yield recepie.addRecepieUserSave(user);
            }));
            seedData_1.seedData.cookbooks.forEach((elem) => __awaiter(this, void 0, void 0, function* () {
                const { Recepies } = elem, rest = __rest(elem, ["Recepies"]);
                const cookbook = yield models_1.default.Cookbook.create(rest).catch((err) => console.log(err));
                const user = yield models_1.default.User.findByPk(elem.UserId);
                yield cookbook.addCookbookUserSave(user);
                Recepies.forEach((recepieId) => __awaiter(this, void 0, void 0, function* () {
                    yield cookbook.addCookbookRecepie(yield models_1.default.Recepie.findByPk(recepieId));
                }));
            }));
            // seedData.recepiesInCookbooks.forEach(async (elem) => {
            // 	const cookbook = await db.Cookbook.findByPk(elem.CookbookId);
            // 	const recepie = await db.Recepie.findByPk(elem.RecepieId);
            // 	console.log(cookbook);
            // 	await cookbook.addCookbookRecepie(recepie);
            // });
        }));
    }
    connectMiddlewares() {
        this.client.use(express_1.default.json());
        this.client.use(express_1.default.urlencoded());
        this.client.use((0, cookie_parser_1.default)());
        this.client.use((0, express_fileupload_1.default)());
    }
    connectErrorHandlers() {
        this.client.use(middleware_1.middlewares.errorMiddleware);
    }
    connectRoutes() {
        this.client.use("/api", routes_1.default);
    }
    listen() {
        this.client.listen(config_1.serverConfig.port, config_1.serverConfig.hostName, () => {
            console.log(`Server start: ${config_1.serverConfig.hostName}:${config_1.serverConfig.port}`);
        });
    }
}
exports.App = App;

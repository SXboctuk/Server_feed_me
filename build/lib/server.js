"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app_1 = require("./api/app");
class Server {
    constructor() {
        this.app = new app_1.App();
    }
    start() {
        this.app.connectStatic();
        this.app.connectCors();
        this.app.connectDb();
        this.app.connectMiddlewares();
        this.app.connectRoutes();
        this.app.connectErrorHandlers();
        this.app.listen();
    }
}
exports.Server = Server;

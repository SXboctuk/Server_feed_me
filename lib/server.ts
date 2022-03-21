import { App } from './api/app';

export class Server {
    app;

    constructor() {
        this.app = new App();
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

import { App } from './api/app';

export class Server {
    app;

    constructor() {
        this.app = new App();
    }

    async start() {
        await this.app.connectDb();
        this.app.connectStatic();
        this.app.connectCors();

        this.app.connectMiddlewares();
        this.app.connectRoutes();
        this.app.connectErrorHandlers();
        this.app.listen();
        return this.app;
    }
}

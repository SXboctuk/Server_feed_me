import express, { Express } from "express";
import { App } from "./api/app";

export class Server {
	app;

	constructor() {
		this.app = new App();
	}

	start() {
		this.app.connectCors();
		this.app.connectDb();
		this.app.connectErrorHandlers();
		this.app.connectMiddlewares();
		this.app.connectRoutes();
		this.app.listen();
	}
}

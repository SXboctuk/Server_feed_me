import express, { Express } from "express";
import cors from "cors";
import { Server } from "node:http";
import { serverConfig } from "../constants/config";
import { errorMiddleware } from "../middleware";
import db from "./data-access/models";

export class App {
	client: Express;

	constructor() {
		this.client = express();
	}

	connectCors() {
		this.client.use(cors());
	}

	connectDb() {
		db.sequelize.sync().then(() => {
			console.log(`Database connected`);
		});
	}

	connectMiddlewares() {
		this.client.use(express.json());
	}

	connectErrorHandlers() {
		this.client.use(errorMiddleware);
	}

	connectRoutes() {
		// this.app.use("/");
	}

	public listen() {
		this.client.listen(serverConfig.port, serverConfig.hostName, () => {
			console.log(
				`Server start: ${serverConfig.hostName}:${serverConfig.port}`
			);
		});
	}
}

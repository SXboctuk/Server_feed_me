import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Server } from "node:http";
import { serverConfig } from "../constants/config";
import { middlewares } from "../middleware";
import db from "./data-access/models";
import mainRoute from "./routes";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

export class App {
	client: Express;

	constructor() {
		this.client = express();
	}

	connectCors() {
		this.client.use(cors());
	}

	connectDb() {
		db.sequelize.sync({ force: true }).then(() => {
			console.log(`Database connected`);
		});
	}

	connectMiddlewares() {
		this.client.use(express.json());
		this.client.use(cookieParser());
		this.client.use(fileUpload());
	}

	connectErrorHandlers() {
		this.client.use(middlewares.errorMiddleware);
	}

	connectRoutes() {
		this.client.use("/api", mainRoute);
	}

	public listen() {
		this.client.listen(serverConfig.port, serverConfig.hostName, () => {
			console.log(
				`Server start: ${serverConfig.hostName}:${serverConfig.port}`
			);
		});
	}
}

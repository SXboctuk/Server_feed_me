import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { serverConfig } from '../constants/config';
import { middlewares } from '../middleware';
import db from './data-access/models';
import mainRoute from './routes';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { seedData } from './data-access/seedData';
import { runInThisContext } from 'vm';

export class App {
    client: Express;

    constructor() {
        this.client = express();
    }

    connectStatic() {
        this.client.use('/uploads', express.static('uploads'));
    }

    connectCors() {
        // this.client.use(
        //     cors({ credentials: true, origin: 'http://localhost:8080' }),
        // );
        // this.client.use(cors());
        this.client.use(
            cors({ credentials: true, origin: 'https://sxboctuk.github.io' }),
        );
    }
    //{ force: true }
    connectDb() {
        db.sequelize.sync({ force: true }).then(async () => {
            console.log('database connected');
            // seed data
            seedData.users.forEach(async (elem) => {
                await db.User.create(elem);
            });
            seedData.recepies.forEach(async (elem) => {
                const recepie = await db.Recepie.create(elem).catch(
                    (err: any) => console.log(err),
                );
                const user = await db.User.findByPk(elem.UserId);
                await recepie.addRecepieUserSave(user);
            });
            seedData.cookbooks.forEach(async (elem) => {
                const { Recepies, ...rest } = elem;
                const cookbook = await db.Cookbook.create(rest).catch(
                    (err: any) => console.log(err),
                );
                const user = await db.User.findByPk(elem.UserId);
                await cookbook.addCookbookUserSave(user);
                Recepies.forEach(async (recepieId) => {
                    await cookbook.addCookbookRecepie(
                        await db.Recepie.findByPk(recepieId),
                    );
                });
            });
        });
    }

    connectMiddlewares() {
        this.client.use(express.json());
        this.client.use(express.urlencoded());
        this.client.use(cookieParser());
        this.client.use(fileUpload());
    }

    connectErrorHandlers() {
        this.client.use(middlewares.errorMiddleware);
    }

    connectRoutes() {
        this.client.use('/api', mainRoute);
    }
    public listen() {
        this.client.listen(serverConfig.port, serverConfig.hostName, () => {
            console.log(
                `Server start: ${serverConfig.hostName}:${serverConfig.port}`,
            );
        });
    }
}

import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { serverConfig } from '../constants/config';
import { middlewares } from '../middleware';
import db from './data-access/models';
import mainRoute from './routes';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { seedData } from './data-access/seedData';
import { User } from './data-access/models/user';
import { authParse } from '../middleware/authParse.middleware';

const env = process.env.NODE_ENV || 'development';
export class App {
    client: Express;

    constructor() {
        this.client = express();
    }

    connectStatic() {
        this.client.use('/uploads', express.static('uploads'));
    }

    connectCors() {
        env === 'production'
            ? this.client.use(
                  cors({
                      credentials: true,
                      origin: 'https://sxboctuk.github.io',
                  }),
              )
            : this.client.use(
                  cors({ credentials: true, origin: 'http://localhost:8080' }),
              );

        // this.client.use(cors());
    }
    //{ force: true }
    async connectDb() {
        db.sequelize.sync({ force: true }).then(async () => {
            console.log('database connected');
            // seed data
            seedData.users.forEach(async (elem) => {
                await User.create(elem);
            });
            seedData.recepies.forEach(async (elem) => {
                const recepie = await db.Recepie.create(elem).catch(
                    (err: any) => console.log(err),
                );
                const user = await User.findByPk(elem.UserId);
                await recepie.addRecepieUserSave(user);
            });
            seedData.cookbooks.forEach(async (elem) => {
                const { Recepies, ...rest } = elem;
                const cookbook = await db.Cookbook.create(rest).catch(
                    (err: any) => console.log(err),
                );
                const user = await User.findByPk(elem.UserId);
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
        this.client.use(express.urlencoded({ extended: true }));
        this.client.use(cookieParser());
        this.client.use(fileUpload());
        this.client.use(authParse);
    }

    connectErrorHandlers() {
        this.client.use(middlewares.errorMiddleware);
    }

    connectRoutes() {
        this.client.use('/api', mainRoute);
    }
    public listen() {
        return this.client.listen(
            serverConfig.port,
            serverConfig.hostName,
            () => {
                console.log(
                    `Server start: ${serverConfig.hostName}:${serverConfig.port}`,
                );
            },
        );
    }
}

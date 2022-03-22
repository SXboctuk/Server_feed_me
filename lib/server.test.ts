import request from 'supertest';
import db from './api/data-access/models';
import { seedData } from './api/data-access/seedData';

import { App } from './api/app';

describe('Test example', () => {
    const app = new App();
    beforeAll(async () => {
        await db.sequelize.sync({ force: true }).then(async () => {
            await Promise.all(
                seedData.users.map(async (elem) => {
                    await db.User.create(elem);
                }),
            );
            await Promise.all(
                seedData.recepies.map(async (elem) => {
                    const recepie = await db.Recepie.create(elem).catch(
                        (err: any) => console.log(err),
                    );
                    const user = await db.User.findByPk(elem.UserId);
                    await recepie.addRecepieUserSave(user);
                }),
            );
            await Promise.all(
                seedData.cookbooks.map(async (elem) => {
                    const { Recepies, ...rest } = elem;
                    const cookbook = await db.Cookbook.create(rest).catch(
                        (err: any) => console.log(err),
                    );
                    const user = await db.User.findByPk(elem.UserId);
                    await cookbook.addCookbookUserSave(user);
                    await Promise.all(
                        Recepies.map(async (recepieId) => {
                            await cookbook.addCookbookRecepie(
                                await db.Recepie.findByPk(recepieId),
                            );
                        }),
                    );
                }),
            );
        });
        app.connectStatic();
        app.connectCors();

        app.connectMiddlewares();
        app.connectRoutes();
        app.connectErrorHandlers();
        app.listen();
    });
    // More things come here
    test('GET /api', async () => {
        // Logic goes here
        const res = await request(app.client).get('/api');

        expect(res.statusCode).toBe(200);
    });
    test('post /api', async () => {
        // Logic goes here
        const res = await request(app.client)
            .post('/api/auth/sign-in')
            .send({ email: 'test1@mail.com', password: 'qwerty' })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBe('test1@mail.com');
        expect(res.body.userName).toBe('tester1');
    });
});

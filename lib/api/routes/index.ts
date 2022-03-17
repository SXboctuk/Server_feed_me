import { Router } from 'express';
import authRoute from './auth.routes';
import cookbookRoute from './cookbook.routes';
import recepieRoute from './recepie.routes';
import userRoute from './user.routes';

const mainRoute = Router();

mainRoute.use('/auth', authRoute);
mainRoute.use('/user', userRoute);
mainRoute.use('/recepie', recepieRoute);
mainRoute.use('/cookbook', cookbookRoute);
mainRoute.use('/', (req, res) => {
    res.end(`<h1> Hello its me</h1> `);
});
export default mainRoute;

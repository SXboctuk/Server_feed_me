import { Router } from 'express';
import { validator } from '../../helpers/validators';
import { privateController } from '../controllers';

const privateRoute = Router();

privateRoute.post(
    '/loadimage',
    validator.privat.loadImage,
    privateController.loadImage,
);
export default privateRoute;

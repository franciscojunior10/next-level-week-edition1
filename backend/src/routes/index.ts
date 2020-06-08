import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from '../config/multer';

import ItemsController from '../controllers/ItemsController';
import PointsController from '../controllers/PointsController';

const routes = express.Router();
const upaload = multer(multerConfig);

routes.get('/items', ItemsController.index);

routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

routes.post('/points',
    upaload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false,
    }), 
    PointsController.store)
;

export default routes;
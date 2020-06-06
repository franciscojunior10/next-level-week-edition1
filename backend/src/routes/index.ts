import express from 'express';
import knex from '../database/connection';

import ItemsController from '../controllers/ItemsController';
import PointsController from '../controllers/PointsController';

const routes = express.Router();

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.store);
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

export default routes;
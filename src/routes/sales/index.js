import { Router } from "express";
import SalesController from '../../controller/sales/index.js';

const SalesRouter = Router();

SalesRouter.get("/sales",SalesController.getAll);

SalesRouter.get('/sales',SalesController.getSingle);

SalesRouter.post('/sales',SalesController.create);


export default SalesRouter;
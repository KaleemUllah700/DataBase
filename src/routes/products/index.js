import { Router } from "express";
import ProductController from '../../controller/products/index.js';

const ProductRouter = Router();

ProductRouter.get("/products",ProductController.getAll);

ProductRouter.get('/product',ProductController.getSingle);

ProductRouter.post('/products',ProductController.create);


export default ProductRouter;
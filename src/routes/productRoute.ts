import express from 'express';

import productsController from '../controllers/productsController';
import { checkProductData } from '../middlewares/validate';

const router = express.Router();

router.get('/products', productsController.getProducts);

router.get('/products/:id', productsController.getProduct);

router.post('/products', checkProductData, productsController.addProduct);

router.put('/products/:id', checkProductData, productsController.updateProduct);

router.delete('/products/:id', productsController.deleteProduct);

export default router;

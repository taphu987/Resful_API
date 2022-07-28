import express from "express"

import productsController from "../controllers/productsController"

const router = express.Router();


router.get("/products", productsController.getProducts)

router.get("/products/:id", productsController.getProduct )

router.post("/products", productsController.addProduct )

router.put("/products/:id", productsController.updateProduct)

router.delete("/products/:id", productsController.deleteProduct)

export default router;
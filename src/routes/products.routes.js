import { Router } from "express";
import { createProductController, deleteProductController, listProductsController, listProductsFromCategoryController, retrieveProductController, updateProductController } from "../controllers/products.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createProductSchema, updateProductSchema } from "../schemas/products.schema";

const productsRoutes = Router()

productsRoutes.post("", ensureDataIsValidMiddleware(createProductSchema), createProductController)
productsRoutes.get("", listProductsController)
productsRoutes.get("/:id", retrieveProductController)
productsRoutes.get("/category/:id", listProductsFromCategoryController)
productsRoutes.delete("/:id", deleteProductController)
productsRoutes.patch("/:id", ensureDataIsValidMiddleware(updateProductSchema), updateProductController)

export default productsRoutes
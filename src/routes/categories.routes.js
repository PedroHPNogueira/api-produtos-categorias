import { Router } from "express";
import { createCategoryController, deleteCategoryController, listCategoriesController, retrieveCategoryController, updateCategoryController } from "../controllers/categories.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createCategorySchema } from "../schemas/category.schema";

const categoriesRoutes = Router()

categoriesRoutes.get("", listCategoriesController)
categoriesRoutes.post("", ensureDataIsValidMiddleware(createCategorySchema), createCategoryController)
categoriesRoutes.get("/:id", retrieveCategoryController)
categoriesRoutes.patch("/:id", ensureDataIsValidMiddleware(createCategorySchema), updateCategoryController)
categoriesRoutes.delete("/:id", deleteCategoryController)

export default categoriesRoutes
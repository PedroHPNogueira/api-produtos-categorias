import { listCategoriesService} from "../services/categories/listCategories.service"
import { createCategoryService } from "../services/categories/createCategory.service"
import { retrieveCategoryService } from "../services/categories/retrieveCtegory.service"
import { updateCategoryService } from "../services/categories/updateCategory.service"
import { deleteCategoryService } from "../services/categories/deleteCategory.service"

export const listCategoriesController = async (request, response) => {
    const data = await listCategoriesService()
    return response.status(200).json(data)
}

export const createCategoryController = async (request, response) => {
    const data = await createCategoryService(request.validatedBody)
    return response.status(201).json(data)
}

export const retrieveCategoryController = async (request, response) => {
    const data = await retrieveCategoryService(request.params.id)
    return response.status(200).json(data)
}

export const updateCategoryController = async (request, response) => {
    const data = await updateCategoryService(request.params.id, request.body)
    return response.status(200).json(data)
}

export const deleteCategoryController = async (request, response) => {
    const data = await deleteCategoryService(request.params.id)
    return response.status(204).json(data)
}
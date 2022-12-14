import { response } from "express"
import { createProductService } from "../services/products/createProduct.service"
import { deleteProductService } from "../services/products/deleteProduct.service"
import { listProductsService } from "../services/products/listProducts.service"
import { listProductsFromCategoryService } from "../services/products/listProductsFromCategory.service"
import { retrieveProductService } from "../services/products/retrieveProduct.service"
import { updateProductService } from "../services/products/updateProduct.service"

export const createProductController = async (request, response) => {
    const data = await createProductService(request.body)
    return response.status(201).json(data)
}

export const listProductsController = async (request, response) => {
    const data = await listProductsService()
    return response.status(200).json(data)
}

export const retrieveProductController = async (request, response) => {
    const data = await retrieveProductService(request.params.id)
    return response.status(200).json(data)
}

export const listProductsFromCategoryController = async (request, response) => {
    const data = await listProductsFromCategoryService(request.params.id)
    return response.status(200).json(data)
}

export const deleteProductController = async (request, response) => {
    const data = await deleteProductService(request.params.id)
    return response.status(204).json(data)
}

export const updateProductController = async (request, response) => {
    const data = await updateProductService(request.body,request.params.id)
    return response.status(200).json(data)
}
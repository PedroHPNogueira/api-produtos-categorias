import * as yup from "yup"

export const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

export const updateProductSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number(),
    category_id: yup.number()
})

export const productSchema = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().nullable()
})

export const productWithCategoryNameSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required()
})

export const productsListSchema = yup.array(productSchema)

export const productWithCategoryNameListSchema = yup.array(productWithCategoryNameSchema)
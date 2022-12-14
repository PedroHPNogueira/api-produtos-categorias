import * as yup from "yup"

export const createCategorySchema = yup.object().shape({
    name: yup.string().required()
})

export const categorySchema = yup.object().shape({
    name: yup.string().required(),
    id: yup.number().required()
})

export const categoriesListSchema = yup.array(categorySchema)
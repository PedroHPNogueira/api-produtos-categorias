import { database } from "../../database"
import { AppError } from "../../errors"
import { productSchema } from "../../schemas/products.schema"

export const updateProductService = async (payload, id) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponseProductToUpdate = await database.query(
        `
        SELECT
            *
        FROM 
            products
        WHERE
            id = $1
        `,
        [id]
    )

    const productToUpdate = queryResponseProductToUpdate.rows[0]
    const updatedProduct = {
        ...productToUpdate,
        ...payload
    }

    const queryResponse = await database.query(
        `
        UPDATE
            products
        SET
            name = $1, price = $2, category_id = $3
        WHERE
            id = id
        RETURNING *;
        `,
        [updatedProduct.name, updatedProduct.price, updatedProduct.category_id]
    )

    if (queryResponse.rowCount === 0){
        throw new AppError("category does not exists", 404)
    }

    const validatedProduct = await productSchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return validatedProduct
}
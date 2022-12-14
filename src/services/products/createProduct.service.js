import { database } from "../../database"
import { productSchema } from "../../schemas/products.schema"

export const createProductService = async (productData) => {

    const queryResponse = await database.query(
        `
        INSERT INTO
            products (name, price, category_id)
        VALUES
            ($1,$2,$3)
        RETURNING *;`,
        [productData.name, productData.price, productData.category_id]
    )

    const validatedProduct = await productSchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return validatedProduct
}
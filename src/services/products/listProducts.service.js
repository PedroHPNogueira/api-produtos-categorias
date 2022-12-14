import { database } from "../../database"
import { productsListSchema } from "../../schemas/products.schema"

export const listProductsService = async () => {

    const queryResponse = await database.query(
        `
        SELECT 
            *
        FROM
            products;
        `
    )

    const validatedProduct = await productsListSchema.validate(queryResponse.rows)

    return validatedProduct

}
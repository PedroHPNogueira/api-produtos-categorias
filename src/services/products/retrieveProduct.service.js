import { database } from "../../database"
import { AppError } from "../../errors"
import { productSchema } from "../../schemas/products.schema"

export const retrieveProductService = async (id) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            products
        WHERE
            id = $1;
        `,
        [id]
    )

    if (queryResponse.rowCount === 0){
        throw new AppError("category does not exists", 404)
    }

    const validatedProduct = await productSchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })
    return validatedProduct
}
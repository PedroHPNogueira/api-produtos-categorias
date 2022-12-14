import { database } from "../../database"
import { AppError } from "../../errors"
import { categorySchema } from "../../schemas/category.schema"

export const retrieveCategoryService = async (id) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
         categories
        WHERE
         id = $1;
        `,
        [id]
    )

    if (queryResponse.rowCount === 0){
        throw new AppError("category does not exists", 404)
    }

    const validatedCategory = await categorySchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return validatedCategory
}
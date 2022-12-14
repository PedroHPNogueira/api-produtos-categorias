import { database } from "../../database"
import { AppError } from "../../errors"
import { categorySchema } from "../../schemas/category.schema"

export const updateCategoryService = async (id, payload) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponse = await database.query(
        `UPDATE
            categories
        SET
            name = $1
        WHERE
            id = $2
        RETURNING *;`,
        [payload.name, id]
    )

    if (queryResponse.rowCount === 0){
        throw new AppError("category does not exists", 404)
    }

    const validatedCategory = await categorySchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return validatedCategory
}
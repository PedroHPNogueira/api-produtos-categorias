import { database } from "../../database"
import { AppError } from "../../errors"
import { categorySchema } from "../../schemas/category.schema"

export const createCategoryService = async (categoryData) => {

    const categorySearch = await database.query(
        `
        SELECT 
            *
        FROM
            categories
        WHERE
            name = $1;
        `,
        [categoryData.name]
    )

    if (categorySearch.rowCount > 0){
        throw new AppError("category already exists", 400)
    }

    const queryResponse = await database.query(
        `
        INSERT INTO 
            categories (name) 
        VALUES 
            ($1)
        RETURNING *;`,
        [categoryData.name]
    )

    const validatedCategory = await categorySchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })

    return validatedCategory
}
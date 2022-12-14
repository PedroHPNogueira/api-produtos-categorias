import {database} from "../../database"
import { categoriesListSchema } from "../../schemas/category.schema"

export const listCategoriesService = async () => {

    const queryResponse = await database.query(
        `
            SELECT 
                * 
            FROM 
                categories
            ORDER BY 
                categories.id;`
    )

    const validetedCategories = await categoriesListSchema.validate(queryResponse.rows, {
        stripUnknown: true
    })
    

    return validetedCategories
}


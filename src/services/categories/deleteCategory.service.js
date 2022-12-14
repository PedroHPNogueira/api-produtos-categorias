import { database } from "../../database"
import { AppError } from "../../errors"

export const deleteCategoryService = async (id) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponse = await database.query(
        `
        DELETE FROM
            categories
        WHERE
            id = $1;
        `,
        [id]
    )

    if (queryResponse.rowCount === 0){
        throw new AppError("category does not exists", 404)
    }

    return {}
}
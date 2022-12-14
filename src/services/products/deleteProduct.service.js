import { database } from "../../database"
import { AppError } from "../../errors"

export const deleteProductService = async (id) => {

    if (!Number(id)){
        throw new AppError("category does not exists", 404)
    }

    const queryResponse = await database.query(
        `
        DELETE FROM
            products
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
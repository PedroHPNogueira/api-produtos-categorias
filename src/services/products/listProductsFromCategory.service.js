import { database } from "../../database"
import { productWithCategoryNameListSchema } from "../../schemas/products.schema"

export const listProductsFromCategoryService = async (id) => {

    const queryResponse = await database.query(
        `
        SELECT 
	        p.name,
	        p.price,
	        c.name category
        FROM 
            products p
        JOIN 
            categories c ON c.id = p.category_id
        WHERE 
            p.category_id = $1;
        `,
        [id]
    )

    const validatedProducts = await productWithCategoryNameListSchema.validate(queryResponse.rows, {
        stripUnknown: true
    })

    return validatedProducts
} 
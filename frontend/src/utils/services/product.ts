import { CREATE_PRODUCT } from "@utils/constants"

export class ProductService {
	static async createProduct<T>(body: T) {
		const request = await fetch(CREATE_PRODUCT, {
			method: "POST",
			body: JSON.stringify(body),
		})
		if (!request.ok) {
			const response = await request.json()
			if (response?.sku) {
				throw new Error(response.sku)
			}
		}
		//const response = await request.json()
	}
}

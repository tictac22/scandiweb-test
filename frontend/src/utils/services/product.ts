import { CREATE_PRODUCT, DELETE_PRODUCTS, GET_ALL_PRODUCTS } from "@utils/constants"
import { Product } from "@utils/interfaces"

export class ProductService {
	static async getAll() {
		const request = await fetch(GET_ALL_PRODUCTS)
		const response: Product[] = await request.json()
		return response
	}
	static async create<T>(body: T) {
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
	}
	static async deleteProducts(ids: number[]) {
		const request = await fetch(DELETE_PRODUCTS, {
			body: JSON.stringify({ ids }),
			method: "DELETE",
		})
		console.log(request)
	}
}

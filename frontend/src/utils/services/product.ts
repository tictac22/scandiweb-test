import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "@utils/constants"
import { Product } from "@utils/interfaces"
import { wrapPromise } from "@utils/wrapPromise"

export class ProductService {
	static getAll() {
		return wrapPromise<Product[]>(this.fetchAllProducts())
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
	private static async fetchAllProducts() {
		const request = await fetch(GET_ALL_PRODUCTS)
		const response: Product[] = await request.json()
		return response
	}
}

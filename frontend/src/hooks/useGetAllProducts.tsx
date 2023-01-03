import { Product } from "@utils/interfaces"
import { ProductService } from "@utils/services/product"
import { useEffect, useState } from "react"

export const useGetAllProducts = () => {
	const [products, setProducts] = useState<Product[]>([])
	const filterProducts = (ids: number[]) => {
		const filteredProducts = products.filter((item) => ids.indexOf(item.product_id) === -1)
		setProducts([...filteredProducts])
	}
	useEffect(() => {
		;(async () => {
			const response = await ProductService.getAll()
			setProducts(response)
		})()
	}, [])
	return { products, filterProducts }
}

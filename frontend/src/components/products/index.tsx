import { getProductsApi } from "@context/product"
import { Product } from "./Product"

export const Products = () => {
	//const products = resourse.read()!
	const { products } = getProductsApi()!
	return (
		<>
			{products.map((item) => (
				<Product key={item.product_sku} {...item} />
			))}
		</>
	)
}

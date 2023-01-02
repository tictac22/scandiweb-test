import { ProductService } from "@utils/services/product"
import { Product } from "./Product"

const resourse = ProductService.getAll()
export const Products = () => {
	const products = resourse.read()!
	return (
		<>
			{products.map((item) => (
				<Product key={item.product_sku} {...item} />
			))}
		</>
	)
}

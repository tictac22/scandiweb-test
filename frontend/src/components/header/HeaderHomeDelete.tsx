import { DeleteSpinner } from "@assets/DeleteSpinner"
import { getProductsApi } from "@context/product"
import { ProductService } from "@utils/services/product"
import { useCreateStore } from "@utils/state"
import { useState } from "react"

export const HeaderHomeDelete = () => {
	const { products, clearState } = useCreateStore()

	const { filterProducts } = getProductsApi()!
	const [loading, setLoading] = useState(false)
	const deleteProducts = async () => {
		if (products.selectedProducts.length === 0) return
		setLoading(true)
		await ProductService.deleteProducts(products.selectedProducts)
		setLoading(false)
		filterProducts(products.selectedProducts)
		clearState()
	}
	return (
		<button
			disabled={loading}
			onClick={deleteProducts}
			id="delete-product-btn"
			className="header__buttons--delete button"
		>
			{loading ? <DeleteSpinner /> : "MASS DELETE"}
		</button>
	)
}

import { useGetAllProducts } from "@hooks/useGetAllProducts"
import { createContext, useContext } from "react"

type ContextType = ReturnType<typeof useGetAllProducts>
const ProductStore = createContext<ContextType | null>(null)
export const getProductsApi = () => useContext(ProductStore)
export const ProductContext = ({ children }: { children: React.ReactNode }) => {
	const products = useGetAllProducts()
	return <ProductStore.Provider value={products}>{children}</ProductStore.Provider>
}

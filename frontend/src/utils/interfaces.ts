export interface Attributes {
	size?: string
	weight?: string
	length?: string
	width?: string
	height?: string
}
export interface Product {
	product_id: number
	product_sku: string
	name: string
	price: string
	attributes: Attributes
}

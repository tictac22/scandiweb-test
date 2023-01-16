import { useCreateStore } from "@utils/state"

export const ProductCheckBox = ({ id }: { id: number }) => {
	const { addProduct, products } = useCreateStore()
	const handleSetChecked = () => {
		addProduct(id)
	}
	return (
		<div>
			<input onChange={handleSetChecked} type="checkbox" className="delete-checkbox .delete-checkbox" />
		</div>
	)
}

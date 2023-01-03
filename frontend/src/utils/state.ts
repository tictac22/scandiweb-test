import { useSyncExternalStore } from "react"

type Store = {
	selectedProducts: number[]
}
const createStore = () => {
	let currentState: Store = {
		selectedProducts: [],
	}
	const listeners = new Set<(state: Store) => void>()

	return {
		getState: () => currentState,
		setCheckProducts: (productId: number) => {
			const inArray = currentState.selectedProducts.indexOf(productId)
			if (inArray > -1) {
				if (currentState.selectedProducts.length === 1) {
					currentState = {
						selectedProducts: [],
					}
				} else {
					let copiedArray = [...currentState.selectedProducts]
					copiedArray.splice(inArray, 1)
					currentState = {
						selectedProducts: copiedArray,
					}
				}
			} else {
				currentState = {
					selectedProducts: [...currentState.selectedProducts, productId],
				}
			}
			listeners.forEach((item) => {
				item(currentState)
			})
		},
		clearState: () => {
			currentState = {
				selectedProducts: [],
			}
			listeners.forEach((item) => {
				item(currentState)
			})
		},
		subscribe: (listener: (state: Store) => void) => {
			listeners.add(listener)
			return () => listeners.delete(listener)
		},
	}
}
const store = createStore()
export const useCreateStore = () => {
	const products = useSyncExternalStore(store.subscribe, store.getState)

	return {
		products,
		addProduct: (id: number) => store.setCheckProducts(id),
		clearState: () => store.clearState(),
	}
}

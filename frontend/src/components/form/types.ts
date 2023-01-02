import { Switchers } from "./Switcher"

export type HookFormValues = {
	sku: string
	name: string
	price: number
	typeSwitcher: Switchers
	swithcerParam: {
		size?: {
			id: number
			value: number
		}
		weight?: {
			id: number
			value: number
		}
		height?: {
			id: number
			value: number
		}
		width?: {
			id: number
			value: number
		}
		length?: {
			id: number
			value: number
		}
	}
}
export interface IFormInput {
	name: string
	type: "text" | "number"
	labelText: string
	validation?: { [key: string]: number | boolean }
}
export interface ISwitcherForm extends IFormInput {
	description?: string
	id: number
}

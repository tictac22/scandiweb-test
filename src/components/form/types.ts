import { Switchers } from "./Switcher"

export type HookFormValues = {
	sku: string
	name: string
	price: number
	typeSwitcher: Switchers
	swithcerParam: {
		weigth?: number
		size?: number
		width?: number
		height?: number
		length?: number
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
}

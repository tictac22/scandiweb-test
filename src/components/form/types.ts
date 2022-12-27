import { Switchers } from "./Switcher"

export type HookFormValues = {
	sku: string
	name: string
	price: number
	size: number
	weigth: number
	typeSwitcher: Switchers
	width: number
	height: number
	length: number
}
export interface IFormInput {
	name: string
	type: string
	labelText: string
	validation?: { [key: string]: number | boolean }
}
export interface ISwitcherForm extends IFormInput {
	description?: string
}

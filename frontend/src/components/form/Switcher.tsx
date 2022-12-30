import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { HookFormValues, ISwitcherForm } from "./types"

export const enum Switchers {
	Default = "DEFAULT",
	Dvd = "Dvd",
	Book = "Book",
	Furniture = "Furniture",
}
export const options = [
	{
		text: "Select a switcher",
		value: Switchers.Default,
		default: true,
	},
	{
		text: "DVD",
		value: Switchers.Dvd,
	},
	{
		text: "Book",
		value: Switchers.Book,
	},
	{
		text: "Furniture",
		value: Switchers.Furniture,
	},
]

export const SwitchersText: { [key: string]: ISwitcherForm } = {
	[Switchers.Dvd]: {
		name: "size",
		type: "number",
		labelText: "Size (MB)",
		description: "Please, provide disc space in MB.",
	},
	[Switchers.Book]: {
		name: "weight",
		type: "number",
		labelText: "Weight (KG)",
		description: "Please, provide weight in Kg.",
	},
}

export const SwitchersFurniture: ISwitcherForm[] = [
	{
		name: "height",
		labelText: "Height (CM)",
		type: "number",
	},
	{
		name: "width",
		labelText: "Width (CM)",
		type: "number",
	},
	{
		name: "length",
		labelText: "Length (CM)",
		type: "number",
	},
]

export const SwitcherForm = (props: ISwitcherForm) => {
	const {
		register,
		unregister,
		formState: { errors },
	} = useFormContext<HookFormValues>()
	useEffect(() => {
		return () => {
			unregister(`swithcerParam.${props.name}`)
		}
	}, [])
	return (
		<div className="switcher">
			<div className="form__input input">
				<label
					className={`input__label ${errors.swithcerParam?.[props.name] ? "input__label--error" : ""}`}
					htmlFor={props.name}
				>
					{props.labelText}
				</label>
				<input
					className="input__input"
					type="number"
					id={props.name}
					{...register(`swithcerParam.${props.name}`, { valueAsNumber: true })}
				></input>
				<p className="input__error">{errors.swithcerParam?.[props.name]?.message}</p>
			</div>
			<p className="switcher__descr">{props.description}</p>
		</div>
	)
}

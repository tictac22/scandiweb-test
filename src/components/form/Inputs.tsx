import { useFormContext } from "react-hook-form"
import { HookFormValues, IFormInput } from "./types"

export const inputs: IFormInput[] = [
	{
		name: "sku",
		type: "text",
		labelText: "SKU",
	},
	{
		name: "name",
		labelText: "Name",
		type: "text",
	},
	{
		name: "price",
		labelText: "Price ($)",
		type: "number",
	},
]

export const FormInput = ({ name, validation, labelText, ...rest }: IFormInput) => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<HookFormValues>()

	return (
		<div className="form__input input">
			<input {...register(name)} {...validation} id={name} className="input__input" {...rest} />
			<label htmlFor={name} className={`input__label ${errors[name] ? "input__label--error" : ""}`}>
				{labelText}
			</label>
			<p className="input__error">{errors[name]?.message}</p>
		</div>
	)
}

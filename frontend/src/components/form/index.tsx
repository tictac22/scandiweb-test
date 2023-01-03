import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { options, SwitcherForm, Switchers, SwitchersFurniture, SwitchersText } from "./Switcher"
import { HookFormValues } from "./types"

import { Spinner } from "@assets/Spinner"
import { RoutePaths } from "@utils/paths"
import { ProductService } from "@utils/services/product"
import { FormProvider, useForm } from "react-hook-form"
import { FormInput, inputs } from "./Inputs"
import { schema } from "./schema"

export const Form = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const methods = useForm<HookFormValues>({
		resolver: zodResolver(schema),
		criteriaMode: "all",
		mode: "all",
	})
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setError,
	} = methods
	const onSubmit = async (body: HookFormValues) => {
		try {
			setLoading(true)
			await ProductService.create<HookFormValues>(body)
			navigate(RoutePaths.Home)
		} catch (error) {
			setError("sku", { message: error.message })
			setLoading(false)
		}
	}
	const switcher = watch("typeSwitcher")
	return (
		<FormProvider {...methods}>
			<form method="POST" id="product__form" className="form" onSubmit={handleSubmit(onSubmit)}>
				{inputs.map((item) => (
					<FormInput key={item.name} {...item} />
				))}
				<div className="form__input input">
					<label
						htmlFor="productType"
						className={`input__label ${errors.typeSwitcher ? "input__label--error" : ""}`}
					>
						Type Switcher
					</label>
					<select
						defaultValue={Switchers.Default}
						id="productType"
						className="select"
						{...register("typeSwitcher")}
					>
						{options.map((item) => (
							<option disabled={item.default} key={item.value} value={item.value}>
								{item.text}
							</option>
						))}
					</select>
					<p className="input__error">{errors.typeSwitcher?.message}</p>
				</div>
				<Switcher switcherType={switcher} />
			</form>
			{loading && (
				<div>
					<p className="loading">Creating product ...</p>
					<Spinner />
				</div>
			)}
		</FormProvider>
	)
}

interface ISwitcher {
	switcherType: Switchers
}
const Switcher = ({ switcherType }: ISwitcher) => {
	switch (switcherType) {
		case Switchers.Dvd:
			return <SwitcherForm key="1" {...SwitchersText[Switchers.Dvd]} />
		case Switchers.Book:
			return <SwitcherForm key="2" {...SwitchersText[Switchers.Book]} />
		case Switchers.Furniture:
			return (
				<div className="switcher">
					{SwitchersFurniture.map((item) => (
						<SwitcherForm key={item.name} {...item} />
					))}

					<p className="switcher__descr">Please, provide dimensions.</p>
				</div>
			)
		default:
			return <></>
	}
}

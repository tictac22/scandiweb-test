import { FormInput, inputs } from "@components/form/Inputs"
import { options, SwitcherForm, Switchers, SwitchersFurniture, SwitchersText } from "@components/form/Switcher"
import "@styles/addProduct.scss"
import { FormProvider, useForm } from "react-hook-form"

import { schema } from "@components/form/schema"
import { HookFormValues } from "@components/form/types"
import { zodResolver } from "@hookform/resolvers/zod"

export const AddProduct = () => {
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
	} = methods
	const onSubmit = (data: HookFormValues) => {
		console.log(data, "SERVER")
	}
	const switcher = watch("typeSwitcher")

	return (
		<main className="main">
			<div className="form__product">
				<div className="container">
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
					</FormProvider>
				</div>
			</div>
		</main>
	)
}

interface ISwitcher {
	switcherType: Switchers
}
const Switcher = ({ switcherType }: ISwitcher) => {
	return (
		<div>
			{(function () {
				switch (switcherType) {
					case Switchers.Dvd:
						return <SwitcherForm {...SwitchersText[Switchers.Dvd]} />
					case Switchers.Book:
						return <SwitcherForm {...SwitchersText[Switchers.Book]} />
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
						return ""
				}
			})()}
		</div>
	)
}

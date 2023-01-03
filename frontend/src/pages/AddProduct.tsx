import "@styles/addProduct.scss"

import { Form } from "@components/form"
import { Header } from "@components/header"

export const AddProduct = () => {
	return (
		<>
			<Header />
			<main className="main">
				<div className="form__product">
					<div className="container">
						<Form />
					</div>
				</div>
			</main>
		</>
	)
}

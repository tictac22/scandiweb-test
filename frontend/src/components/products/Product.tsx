import "@styles/product.scss"
import { Attributes as IAttributes, Product as IProduct } from "@utils/interfaces"
import { ProductCheckBox } from "./ProductCheckbox"
export const Product = (props: IProduct) => {
	return (
		<div className="product">
			<ProductCheckBox id={props.product_id} />
			<div className="product__inner">
				<p>{props.product_sku}</p>
				<p>{props.name}</p>
				<p>{props.price} $</p>
				<Attributes {...props.attributes} />
			</div>
		</div>
	)
}

function Attributes(attributes: IAttributes) {
	if (attributes.length) {
		return (
			<>
				<div>
					<p>
						{AttributesDescription.dimensions.text} {Object.values(attributes).join("x")}
					</p>
				</div>
			</>
		)
	}
	return (
		<>
			{Object.keys(attributes).map((item) => {
				const text = AttributesDescription[item]
				return (
					<div key={item}>
						<p>
							{text?.text} {attributes[item]} {text?.measurement}
						</p>
					</div>
				)
			})}
		</>
	)
}

const AttributesDescription = {
	size: {
		text: "Size:",
		measurement: "MB",
	},
	weight: {
		text: "Weight:",
		measurement: "KG",
	},
	dimensions: {
		text: "Dimensions:",
	},
}

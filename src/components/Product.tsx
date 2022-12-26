import "@styles/product.scss"
export const Product = () => {
	return (
		<div className="product">
			<div>
				<input type="checkbox" />
			</div>
			<div className="product__inner">
				<p>JVC200123</p>
				<p>Acme DISC</p>
				<p>1.00$</p>
				<p>Size: 700mb</p>
			</div>
		</div>
	)
}

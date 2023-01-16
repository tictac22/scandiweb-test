import { Link } from "react-router-dom"

export const HeaderAdd = () => {
	return (
		<>
			<h1 className="header__title">Product Add</h1>
			<div className="header__buttons">
				<button
					id="delete-product-btn"
					type="submit"
					form="product_form"
					className="header__buttons--save button"
				>
					Save
				</button>
				<Link to="/" className="header__buttons--cancel button">
					Cancel
				</Link>
			</div>
		</>
	)
}

import { Link } from "react-router-dom"

export const HeaderHome = () => {
	return (
		<>
			<h1 className="header__title">Product List</h1>
			<div className="header__buttons">
				<Link to="addproduct" className="header__buttons--add button">
					ADD
				</Link>

				<button id="delete-product-btn" className="header__buttons--delete button">
					MASS DELETE
				</button>
			</div>
		</>
	)
}

import "@styles/header.scss"
import { Link, useLocation } from "react-router-dom"
export const Header = () => {
	const location = useLocation()
	console.log(location)

	return (
		<header>
			<div className="container">
				<div className="header__inner">
					<h1 className="header__title">Product List</h1>
					<div className="header__buttons">
						<Link to="add" className="header__buttons--add button">
							ADD
						</Link>

						<button className="header__buttons--delete button">MASS DELETE</button>
					</div>
				</div>
			</div>
		</header>
	)
}

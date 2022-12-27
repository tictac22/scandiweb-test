import "@styles/header.scss"
import { useLocation } from "react-router-dom"
import { HeaderHome } from "./HeaderHome"

import { RoutePaths } from "@utils/paths"
import { HeaderAdd } from "./HeaderAdd"

export const Header = () => {
	const location = useLocation()

	return (
		<header>
			<div className="container">
				<div className="header__inner">
					{location.pathname === RoutePaths.Home ? <HeaderHome /> : <HeaderAdd />}
				</div>
			</div>
		</header>
	)
}

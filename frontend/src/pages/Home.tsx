import { Products } from "@components/Products"
import "@styles/home.scss"
import { Suspense } from "react"
const array = new Array(10).fill(1)
export const Home = () => {
	return (
		<main className="main">
			<div className="products">
				<div className="container">
					<div className="products__inner">
						<Suspense fallback={<div></div>}>
							<Products />
						</Suspense>
					</div>
				</div>
			</div>
		</main>
	)
}

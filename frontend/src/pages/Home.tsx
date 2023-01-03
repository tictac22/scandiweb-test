import { Header } from "@components/header"
import { Products } from "@components/products"
import { ProductContext } from "@context/product"
import "@styles/home.scss"
export const Home = () => {
	return (
		<ProductContext>
			<Header />
			<main className="main">
				<div className="products">
					<div className="container">
						<div className="products__inner">
							<Products />
						</div>
					</div>
				</div>
			</main>
		</ProductContext>
	)
}

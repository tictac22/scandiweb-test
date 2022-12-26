import { Product } from "../components/Product"

const array = new Array(10).fill(1)
export const Home = () => {
	return (
		<main className="main">
			<div className="products">
				<div className="container">
					<div className="products__inner">
						{array.map((item, index) => (
							<Product key={index} />
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

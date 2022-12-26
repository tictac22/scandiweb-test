import { Suspense, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { router } from "./route"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header />
				<Suspense fallback={<div></div>}>
					<Routes>
						{router.map((item) => (
							<Route path={item.path} element={item.element} key={item.path} />
						))}
					</Routes>
				</Suspense>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App


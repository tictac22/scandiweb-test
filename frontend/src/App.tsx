import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { router } from "./route"

function App() {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Suspense fallback={<div className="main"></div>}>
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


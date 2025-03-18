import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Page from "./pages/Page"
import Home from "./pages/Home"
import Champion from "./pages/Champion"
import { ChampionProvider } from "./context/ChampionContext"
import Error from "./pages/Error"

function App() {
	return (
		<ChampionProvider>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path="/"
							element={
								<Page title="Home">
									<Home />
								</Page>
							}
						/>
						<Route path="/champion/:championId" element={<Champion />} />
					</Route>
					<Route
						path="*"
						element={
							<Page title="Not Found">
								<Error />
							</Page>
						}
					/>
				</Routes>
			</Router>
		</ChampionProvider>
	)
}

export default App

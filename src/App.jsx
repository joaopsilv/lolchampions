import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Champion from "./pages/Champion"
import { ChampionProvider } from "./context/ChampionContext"

function App() {
	return (
		<ChampionProvider>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/champion/:championId" element={<Champion />} />
					</Route>
				</Routes>
			</Router>
		</ChampionProvider>
	)
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Champion from "./pages/Champion"
import { ChampionProvider } from "./context/ChampionContext"

function App() {
	return (
		<ChampionProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/champion/:championId" element={<Champion />} />
				</Routes>
			</Router>
		</ChampionProvider>
	)
}

export default App

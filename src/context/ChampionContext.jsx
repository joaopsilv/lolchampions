import { createContext, useContext, useEffect, useState } from "react"
import { fetchChampions } from "../services/api"

const ChampionContext = createContext()

export const ChampionProvider = ({ children }) => {
	const [champions, setChampions] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadChampions = async () => {
			const data = await fetchChampions()
			setChampions(data)
			setLoading(false)
		}
		loadChampions()
	}, [])

	return (
		<ChampionContext.Provider value={{ champions, loading }}>
			{children}
		</ChampionContext.Provider>
	)
}

export const useChampions = () => {
	return useContext(ChampionContext)
}

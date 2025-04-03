import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import ChampList from "../components/ChampList"
import { useChampions } from "../context/ChampionContext"

const Home = () => {
	const { champions, loading } = useChampions()
	const [filteredChampions, setFilteredChampions] = useState([])

	useEffect(() => {
		setFilteredChampions(champions)
	}, [champions])

	const handleSearch = (searchTerm) => {
		if (!searchTerm) {
			setFilteredChampions(champions)
			return
		}

		const term = searchTerm.toLowerCase()

		const filtered = champions.filter((champ) =>
			champ.name.toLowerCase().includes(term)
		)

		const sorted = filtered.sort((a, b) => {
			const aName = a.name.toLowerCase()
			const bName = b.name.toLowerCase()

			const aStartsWith = aName.startsWith(term)
			const bStartsWith = bName.startsWith(term)

			if (aStartsWith && !bStartsWith) {
				return -1 	// 'a' first
			} else if (!aStartsWith && bStartsWith) {
				return 1 	// 'b' first
			} else {
				return aName.localeCompare(bName)
			}
		})

		setFilteredChampions(sorted)
	}

	if (loading) return <p>Loading champions...</p>

	return (
		<main>
			<Hero />
			<SearchBar onSearch={handleSearch} />
			<ChampList champs={filteredChampions} />
		</main>
	)
}

export default Home

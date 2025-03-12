import Hero from "../components/Hero"
import ChampList from "../components/ChampList"
import { useChampions } from "../context/ChampionContext"

const Home = () => {
	const { champions, loading } = useChampions()

	if (loading) return <p>Carregando campeões...</p>

	return (
		<>
			<Hero />
			<ChampList champs={champions} />
		</>
	)
}

export default Home

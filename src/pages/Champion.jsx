import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchChampionById } from "../services/api"
import { useChampions } from "../context/ChampionContext"
import ChampBanner from "../components/ChampBanner"

const Champion = () => {
	const { champions, loading } = useChampions()
	const { championId } = useParams()
	const [champion, setChampion] = useState(null)

	useEffect(() => {
		const loadChampion = async () => {
			const data = await fetchChampionById(championId)
			setChampion(data)
		}
		loadChampion()
	}, [championId])

	if (loading) {
		return <p>Loading...</p>
	}

	if (!champion) {
		const champion = champions.find((champ) => champ.id === championId)
		return (
			<div>
				<h1>{champion.name}</h1>
				<h2>{champion.title}</h2>
				<p>{champion.blurb}</p>
			</div>
		)
	}

	return (
		<>
			<ChampBanner champ={champion} />
		</>
	)
}

export default Champion

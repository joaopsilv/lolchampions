import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchChampionById } from "../services/api"

const Champion = () => {
	const { championId } = useParams()
	const [champion, setChampion] = useState(null)

	useEffect(() => {
		const loadChampion = async () => {
			const data = await fetchChampionById(championId)
			setChampion(data)
		}
		loadChampion()
	}, [championId])

	if (!champion) return <p>Loading...</p>

	return (
		<div>
			<h1>{champion.name}</h1>
			<h2>{champion.title}</h2>
			<p>{champion.lore}</p>
			<img
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
				alt={champion.name}
			/>
		</div>
	)
}

export default Champion

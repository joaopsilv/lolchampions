import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchChampionById } from "../services/api"
import { useChampions } from "../context/ChampionContext"
import ChampBanner from "../components/ChampBanner"
import ChampSkills from "../components/ChampSkills"
import ChampSkins from "../components/ChampSkins"
import Page from "./Page"

const Champion = () => {
	const { championId } = useParams()
	const [champion, setChampion] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { champions, loading: contextLoading } = useChampions()

	useEffect(() => {
		const loadChampion = async () => {
			try {
				setLoading(true)
				setError(false)
				const data = await fetchChampionById(championId)
				if (data) {
					setChampion(data)
				} else {
					const contextChampion = champions.find(
						(champ) => champ.id === championId
					)
					contextChampion ? setChampion(contextChampion) : setError(true)
				}
			} catch (error) {
				console.error(`Error loading champion from API ${championId}:`, error)
				const contextChampion = champions.find(
					(champ) => champ.id === championId
				)
				contextChampion ? setChampion(contextChampion) : setError(true)
			} finally {
				setLoading(false)
			}
		}
		loadChampion()
	}, [championId, champions])

	if (contextLoading || loading) {
		return (
			<Page title="Loading Champion...">
				<div
					className="flex center"
					style={{ gap: "0.5rem", padding: "5rem 2.5rem" }}
				>
					<p>Loading champion data...</p>
				</div>
			</Page>
		)
	}

	if (error || !champion) {
		return (
			<Page title="Not Found">
				<div
					className="flex-column center"
					style={{ gap: "1rem", padding: "5rem 2.5rem", textAlign: "center" }}
				>
					<h2>Champion not found!</h2>
					<p>
						The champion "{championId}" does not exist or could not be loaded...
					</p>
				</div>
			</Page>
		)
	}

	return (
		<Page title={champion.name}>
			<main className="flex-column" style={{ gap: "0" }}>
				<ChampBanner champ={champion} />
				<ChampSkills skills={champion.spells} passive={champion.passive} />
				<ChampSkins
					skinList={champion.skins}
					champID={champion.id}
					champName={champion.name}
				/>
			</main>
		</Page>
	)
}

export default Champion

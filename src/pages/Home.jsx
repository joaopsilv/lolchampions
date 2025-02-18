import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchChampions } from "../services/api"
import { useChampions } from "../context/ChampionContext"

const Home = () => {
	const { champions, loading } = useChampions()

	if (loading) return <p>Carregando campeões...</p>;

	return (
		<div>
			<h1>Lista de Campeões</h1>
			<ul>
				{champions.map((champ) => (
					<li key={champ.id}>
						<Link to={`/champion/${champ.id}`}>
							<img
								src={`https://ddragon.leagueoflegends.com/cdn/15.3.1/img/champion/${champ.id}.png`}
								alt={champ.name}
							/>
							{champ.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home

import { Link } from "react-router-dom"
import style from "./ChampCard.module.scss"
import championPositions from "./championPositions"

export default function ChampCard({ champ }) {
	return (
		<Link to={`/champion/${champ.id}`} className={style.card}>
			<div className={style.imgContainer}>
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`}
					alt={champ.name}
					className="img"
					style={{ objectPosition: championPositions[champ.id] || "center" }}
				/>
			</div>
			<span>{champ.name}</span>
		</Link>
	)
}

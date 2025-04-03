import ChampCard from "../ChampCard"
import style from "./ChampList.module.scss"

export default function ChampList({ champs }) {
	return (
		<section className={`grid center ${style.list}`}>
			{champs.map((champ) => (
				<ChampCard champ={champ} key={champ.id} />
			))}
		</section>
	)
}

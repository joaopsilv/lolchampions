import Scroll from "../Scroll"
import style from "./Hero.module.scss"

export default function Hero() {
	return (
		<section className={`flex-column center ${style.hero}`}>
			<img
				src="src/assets/images/bg-home.jpg"
				alt="Campeões do League of Legends"
				className="bg-img"
			/>
			<h1>
				<span>Champions</span>
				<span>Summary</span>
			</h1>
			<Scroll />
		</section>
	)
}

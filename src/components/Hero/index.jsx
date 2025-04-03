import bgImg from "../../assets/images/bg-home.jpg"
import Scroll from "../Scroll"
import style from "./Hero.module.scss"

export default function Hero() {
	return (
		<section className={`flex-column center ${style.hero}`}>
			<img src={bgImg} alt="League of Legends Champions" className="bg-img" />
			<h1>
				<span>Champions</span>
				<span>Summary</span>
			</h1>
			<Scroll />
		</section>
	)
}

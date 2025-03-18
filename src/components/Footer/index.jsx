import { FaSquareGithub, FaLinkedin } from "react-icons/fa6"
import style from "./Footer.module.scss"

export default function Footer() {
	return (
		<footer className="flex">
			<p>
				Data taken from{" "}
				<a href="https://developer.riotgames.com/docs/lol" target="_blank">
					Data Dragon API
				</a>
			</p>
			<div className={`flex ${style.social}`}>
				<a href="https://github.com/joaopsilv" target="_blank">
					<FaSquareGithub />
				</a>
				<a href="https://www.linkedin.com/in/joao-pedro-gsilveira/" target="_blank">
					<FaLinkedin />
				</a>
			</div>
		</footer>
	)
}

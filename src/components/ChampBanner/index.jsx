import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"
import MetaInfo from "../MetaInfo"
import style from "./ChampBanner.module.scss"

export default function ChampBanner({ champ }) {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 1024)
		}
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const BackLink = () => (
		<Link to="/" className={`${style.back} ${style.back}`}>
			<IoChevronBackOutline />
		</Link>
	)

	return (
		<section className={`flex-column ${style.banner}`}>
			<div className={style.imgContainer}>
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`}
					alt={champ.name}
					className={`bg-img ${style.img}`}
				/>
			</div>
			{!isDesktop && <BackLink />}
			<div className={`flex-column ${style.wrapper}`}>
				{isDesktop && <BackLink />}
				<div className={`flex-column ${style.text}`}>
					<div className="flex-column">
						<h2>{champ.title}</h2>
						<h1>{champ.name}</h1>
					</div>
					<p>{champ.lore ? champ.lore : champ.blurb}</p>
				</div>
				<div className="flex" style={{ gap: "1rem" }}>
					<MetaInfo type="role" roles={champ.tags} />
					<MetaInfo type="difficulty" difficulty={champ.info.difficulty} />
				</div>
			</div>
		</section>
	)
}

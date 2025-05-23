import { useState } from "react"
import AbilityIcon from "../AbilityIcon"
import style from "./ChampSkills.module.scss"

export default function ChampSkills({ skills, passive }) {
	const [selected, setSelected] = useState(passive)

	const skillKeys = ["Q", "W", "E", "R"]
	const skillsWithKeys = skills.map((skill, index) => ({
		...skill,
		key: skillKeys[index],
	}))

	const cleanText = (text) => {
		if (!text) return ""
		let cleanedText = text.replace(/<[^>]*>/g, "").trim()
		return cleanedText.replace(/\.([A-Za-z])/g, ". $1")
	}

	return (
		<section className={`flex-column center padding ${style.skills}`}>
			<h1>Abilities</h1>
			<div className={`flex center ${style.icons}`}>
				<AbilityIcon
					type="Passive"
					skill={passive}
					onSelect={setSelected}
					selected={selected}
				/>
				{skillsWithKeys.map((skill) => {
					return (
						<AbilityIcon
							key={skill.id}
							type="Spell"
							skill={skill}
							onSelect={setSelected}
							selected={selected}
						/>
					)
				})}
			</div>
			<div className={`flex-column center ${style.details}`}>
				<h2>{selected.name}</h2>
				<span>{selected.key ? selected.key : "Passive"}</span>
				<div className={style.description}>
					<p>{cleanText(selected.description)}</p>
				</div>
			</div>
		</section>
	)
}

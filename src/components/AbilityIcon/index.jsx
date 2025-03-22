import style from "./AbilityIcon.module.scss"

export default function AbilityIcon({ type, skill, onSelect, selected }) {
	const API_VERSION = "15.3.1"
	const isActive = selected.id === skill.id

	return (
		<div
			onClick={() => onSelect(skill)}
			className={`flex ${style.icon} ${
				isActive ? style.active : style.inactive
			}`}
		>
			<img
				src={`https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/${type.toLowerCase()}/${
					skill.image.full
				}`}
				alt={skill.name}
			/>
			<span className="flex center">{skill.key ? skill.key : "P"}</span>
		</div>
	)
}

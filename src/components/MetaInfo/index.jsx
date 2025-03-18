import { ReactComponent as AssassinIcon } from "../../assets/images/roleAssassin.svg"
import { ReactComponent as FighterIcon } from "../../assets/images/roleFighter.svg"
import { ReactComponent as MageIcon } from "../../assets/images/roleMage.svg"
import { ReactComponent as MarksmanIcon } from "../../assets/images/roleMarksman.svg"
import { ReactComponent as SupportIcon } from "../../assets/images/roleSupport.svg"
import { ReactComponent as TankIcon } from "../../assets/images/roleTank.svg"
import { ReactComponent as LowIcon } from "../../assets/images/difficultyLow.svg"
import { ReactComponent as MediumIcon } from "../../assets/images/difficultyMedium.svg"
import { ReactComponent as HighIcon } from "../../assets/images/difficultyHigh.svg"
import style from "./MetaInfo.module.scss"

export default function MetaInfo({ type = "role", roles = [], difficulty }) {
	const roleIcons = {
		Assassin: AssassinIcon,
		Fighter: FighterIcon,
		Mage: MageIcon,
		Marksman: MarksmanIcon,
		Support: SupportIcon,
		Tank: TankIcon,
	}

	const difficultyIcons = {
		Low: LowIcon,
		Medium: MediumIcon,
		High: HighIcon,
	}

	const getDifficultyText = (value) => {
		if ((value === undefined) | (value === null)) return null
		if (value >= 0 && value <= 3) return "Low"
		if (value >= 4 && value <= 7) return "Medium"
		if (value >= 8) return "High"
	}

	const difficultyText = getDifficultyText(difficulty)
	const DifficultIcon = difficultyIcons[getDifficultyText(difficulty)]

	return (
		<div className={style.meta}>
			<div className={`flex-column center ${style.box}`}>
				<div className={`flex center ${style.icon}`}>
					{type === "role" &&
						roles.map((role, index) => {
							const RoleIcon = roleIcons[role]
							return RoleIcon ? (
								<RoleIcon key={index} className={style.roleIcon} />
							) : null
						})}
					{type === "difficulty" && (
						<DifficultIcon className={style.diffIcon} />
					)}
				</div>
				<div className={`flex-column center ${style.text}`}>
					<span>{type === "role" ? "Role" : "Difficulty"}</span>
					<span>{type === "role" ? roles.join(" / ") : difficultyText}</span>
				</div>
			</div>
		</div>
	)
}

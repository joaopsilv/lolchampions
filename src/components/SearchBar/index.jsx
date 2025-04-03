import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import style from "./SearchBar.module.scss"

export default function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState("")

	const handleInputChange = (e) => {
		const value = e.target.value
		setSearchTerm(value)
		onSearch(value)
	}

	return (
		<section id="search" className={`flex-column ${style.search}`}>
			<div>
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={handleInputChange}
				/>
				<IoSearch />
			</div>
		</section>
	)
}

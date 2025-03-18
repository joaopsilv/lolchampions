import { useEffect } from "react"

export default function Page({ title = "", children }) {
	useEffect(() => {
		document.title = title ? `${title} - Champions Summary` : "Champions Sumary"
	}, [title])

	return children
}

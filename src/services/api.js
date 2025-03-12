const API_VERSION = "15.3.1"
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/en_US`

export const fetchChampions = async () => {
	try {
		const response = await fetch(`${BASE_URL}/champion.json`)
		const data = await response.json()
		return Object.values(data.data)
	} catch (error) {
		console.error("Error searching for champions:", error)
		return []
	}
}

export const fetchChampionById = async (championId) => {
	try {
		const response = await fetch(`${BASE_URL}/champion/${championId}.json`)
		const data = await response.json()
		return data.data[championId]
	} catch (error) {
		console.error(`Error fetching champion details ${championId}:`, error)
		return null
	}
}

import axios from "axios"

const API_VERSION = "15.3.1"
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/en_US`

export const fetchChampions = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/champion.json`)
		return Object.values(response.data.data)
	} catch (error) {
		console.error("Error searching for champions:", error)
		return []
	}
}

export const fetchChampionById = async (championId) => {
	try {
		const response = await axios.get(`${BASE_URL}/champion/${championId}.json`)
		return response.data.data[championId]
	} catch (error) {
		console.error(`Error fetching champion details ${championId}:`, error)
		return null
	}
}

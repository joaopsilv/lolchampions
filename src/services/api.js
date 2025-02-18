const API_VERSION = "15.3.1"
const BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/pt_BR`

export const fetchChampions = async () => {
	try {
		const response = await fetch(`${BASE_URL}/champion.json`)
		const data = await response.json()
		return Object.values(data.data)
	} catch (error) {
		console.error("Erro ao buscar campeões:", error)
		return []
	}
}

export const fetchChampionById = async (championId) => {
	try {
		const response = await fetch(`${BASE_URL}/champion/${championId}.json`)
		const data = await response.json()
		return data.data[championId]
	} catch (error) {
		console.error(`Erro ao buscar detalhes do campeão ${championId}:`, error)
		return null
	}
}

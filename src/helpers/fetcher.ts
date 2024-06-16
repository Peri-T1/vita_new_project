import { baseUrl } from "../common/constanse"

export const fetcher = async (endpoint: string) => {

    try {
    const response = await fetch(`{baseUrl}${endpoint}`)
    return await response.json()
} catch(e){
    console.error(e, 'network error')

}
}
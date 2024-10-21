import axios from 'axios'

const baseUrl = '/api/promotions'

const get = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const set = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { get, set }
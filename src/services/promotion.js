import axios from 'axios'
import loginService from './login'

const baseUrl = '/api/promotions'

const get = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const set = async (credentials) => {
    const response = await axios.post(baseUrl, credentials, loginService.setHeader())
    return response.data
}

export default { get, set }
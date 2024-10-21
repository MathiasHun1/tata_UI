import axios from 'axios'

const login = async (password) => {
        const response = await axios.post('/api/login', { password: password })
        return response.data
}

export default { login }
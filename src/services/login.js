import axios from 'axios'

const login = async (password) => {
        const response = await axios.post('/api/login', { password: password })
        console.log(response);
        return response.data
}

export default { login }
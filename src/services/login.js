import axios from 'axios'

const login = async (password) => {
    try {
        const response = await axios.post('/api/login', { password: password })
        return response
    } catch (err) {
        console.log(err)
    }
}

export default { login }
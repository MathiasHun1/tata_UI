import axios from 'axios'

let token = '';
   
const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const setHeader = () => {
    const config = {
    headers: { Authorization: token },
  }
  return config
}

const login = async (password) => {
    const response = await axios.post('/api/login', { password: password })
    // const { token } = response.data
    // setToken(token)
    return response.data
}

export default { login, setToken, setHeader }
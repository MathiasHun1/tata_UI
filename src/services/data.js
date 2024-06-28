import axios from 'axios'

const baseUrl = 'https://tata-backend-7rys.onrender.com/api/openings'

const getAllDays = () => {
  const request = axios.get(baseUrl)
  return request.then(response =>  response.data)
}

export default { getAllDays }
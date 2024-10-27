import axios from 'axios'
import loginService from './login'


const baseUrl = '/api/vacations'

const getVacationsData = async () => {
    const response = await axios.get(`${baseUrl}`)
    return response.data
  }
  
const updateVacations = async (vacationsData) => {
  
  const response = await axios.put(baseUrl, { 
    onVacation: vacationsData.onVacation,
    text: vacationsData.text
  }, loginService.setHeader())
  return response.data
}

export default {getVacationsData, updateVacations}
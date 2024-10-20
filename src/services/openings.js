import { sortByDays } from '../components/helpers'
import axios from 'axios'

const baseUrl = '/api/openings'

const getAllDays = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    const sortedDays = sortByDays(response.data)
    return sortedDays
  })
}

const updateDay = async (dayData) => {
  const response = await axios.put(`${baseUrl}/${dayData.day}`, {open: dayData.open, close: dayData.close})
  console.log('server response data: ', response.data);
  return response.data
}

export default { getAllDays, updateDay }
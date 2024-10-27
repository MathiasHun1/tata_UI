/* eslint-disable no-useless-catch */
import { sortByDays } from '../components/helpers'
import axios from 'axios'
import loginService from './login'

const baseUrl = '/api/openings'

const getAllDays = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    const sortedDays = sortByDays(response.data)
    return sortedDays
  })
}

const updateDay = async (dayData) => {
  try {
    console.log(loginService.setHeader());
    
    const response = await axios.put(`${baseUrl}/${dayData.day}`, {open: dayData.open, close: dayData.close}, loginService.setHeader())
    return response.data
  } catch (error) {
    throw(error)
  }
}

export default { getAllDays, updateDay }
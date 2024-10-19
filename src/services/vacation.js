import axios from 'axios'

const baseUrl = '/api/vacations'

const getVacationsData = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
  }
  
  const updateVacations = (vacationsData) => {
    const request = axios.put(baseUrl, { 
      onVacation: vacationsData.onVacation,
      text: vacationsData.text
    })
    return request
  }

  export default {getVacationsData, updateVacations}
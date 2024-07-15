import axios from 'axios'

const baseUrl = '/api/openings'
const vacationsUrl = '/api/vacations'

const getAllDays = () => {
  const request = axios.get(baseUrl)
  return request.then(response =>  response.data)
}

const updateDay = (dayData) => {
  const request = axios.put(`${baseUrl}/${dayData.day}`,
    {open: dayData.open, close: dayData.close})
  return request.then(response => console.log(response))
}

const getVacationsData = () => {
  const request = axios.get(`${vacationsUrl}`)
  return request.then(response => response.data)
}

const updateVacations = (vacationsData) => {
  const request = axios.put(vacationsUrl, { 
    onVacation: vacationsData.onVacation,
    text: vacationsData.text
  })

  return request
}

export default { getAllDays, updateDay, getVacationsData, updateVacations }
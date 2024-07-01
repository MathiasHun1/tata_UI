const mapRedirectUrl = 'https://www.google.com/maps/place/TataMoto+motorker%C3%A9kp%C3%A1r+jav%C3%ADt%C3%A1s+%C3%A9s+szerv%C3%ADz+Budapest/@47.430268,19.1165101,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd453e059039:0x104d089ff016db66!8m2!3d47.4302644!4d19.1190797!16s%2Fg%2F11q2qslpqq?hl=hu&entry=ttu'

const translateDay = (dayName) => {
  switch (dayName) {
    case 'monday':
      return 'Hétfő'
    case 'tuesday':
      return 'Kedd'
    case 'wednesday':
      return 'Szerda'
    case 'thursday': 
      return 'Csütörtök' 
    case 'friday':
      return 'Péntek'
    case 'saturday':
      return 'Szombat'
    case 'sunday':
      return 'Vasárnap'
  }
}

const transformOpening = (open, close) => {
  if(open === null || close === null) {
    return 'Zárva'
  } else {
    return `${open}-${close}`
  }
}


const checkIfOpen = (openingsData) => {
  const today = openingsData[new Date().getDay() - 1]
  console.log(today.day);
  
  if(today.open === null || today.close === null) {
    return false
  }

  const openingTime = transformTimeString(today.open)
  const closingTime = transformTimeString(today.close)
  const currentTime = new Date()

  if(currentTime >= openingTime && currentTime <= closingTime) {
    return true
  }
  return false
}

const transformTimeString = (timeString) => {
  const [hours, minutes] = timeString.split('.').map(item => Number(item))
  const now = new Date()
  now.setHours(hours, minutes, 0, 0)

  return now
}


export { mapRedirectUrl, translateDay, transformOpening, checkIfOpen }
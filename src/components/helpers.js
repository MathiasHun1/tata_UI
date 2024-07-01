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

const transformNull = (text) => {
  if(text.includes('null')) {
    return 'Zárva'
  }
}

export {mapRedirectUrl, translateDay}
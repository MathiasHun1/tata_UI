import axios from 'axios'
import { format, parse, isAfter, isBefore, getDay } from 'date-fns'

// const getOpenings = () => {
//   const request = axios
//   .get(`api/maps/api/place/details/json?place_id=${import.meta.env.VITE_GOOGLE_PLACE_ID}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&fields=name,opening_hours`)
//   return request.then(response => response.data.result.opening_hours)
// }

// const getReviewsList = () => {
//   const request = axios
//     .get(`api/maps/api/place/details/json?place_id=${import.meta.env.VITE_GOOGLE_PLACE_ID}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&fields=reviews&language=hu`)
//     return request.then(response => response.data.result)
// }

// const getRatingAvg = () => {
//   const request = axios
//     .get(`api/maps/api/place/details/json?place_id=${import.meta.env.VITE_GOOGLE_PLACE_ID}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&fields=rating`)
//     return request.then(response => response.data.result)
// }

// const getRatingsQuant = () => {
//   const request = axios
//     .get(`api/maps/api/place/details/json?place_id=${import.meta.env.VITE_GOOGLE_PLACE_ID}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&fields=user_ratings_total`)
//     return request.then(response => response.data.result)
// }




const isOpenNow = () => {
  const openingTimes = {
    monday: {
      opening: '09:00',
      closing: '17:00'
    },
    tuesday: {
      opening: '09:00',
      closing: '17:00'
    },
    wednesday: {
      opening: '10:00',
      closing: '17:00'
    },
    thursday: {
      opening: '09:00',
      closing: '17:00'
    },
    friday: {
      opening: '09:00',
      closing: '17:00'
    }
  };

  const now = new Date();
  const dayOfWeek = getDay(now); // 0 (Sunday) to 6 (Saturday)
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  // Check if it's a weekend
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false;
  }

  const dayName = days[dayOfWeek];
  const dayTimes = openingTimes[dayName];

  if (!dayTimes) {
    return false; // No opening times for this day
  }

  const openingDate = parse(dayTimes.opening, 'HH:mm', now);
  const closingDate = parse(dayTimes.closing, 'HH:mm', now);

  return isAfter(now, openingDate) && isBefore(now, closingDate);
}

const openings = {
  open_now: isOpenNow(),
  weekday_text: [
    "hétfő: 9:00–17:00",
    "kedd: 9:00–17:00",
    "szerda: 10:00–17:00",
    "csütörtök: 9:00–17:00",
    "péntek: 9:00–17:00",
    "szombat: Zárva",
    "vasárnap: Zárva"
  ]
}


export default { openings }
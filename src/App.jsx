import { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import loading2 from './assets/loading2.gif'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Aside from "./components/Aside"
import services from './services/data'
import ReviewCard from "./components/ReviewCard"


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(true)
  const [openingsData, setData] = useState(services.openings)
  const [reviewsList, setReviewsList] = useState(null)
  const [reviewsQuant , setReviewsQuant] = useState(null)
  const [reviewsAvg, setReviewsAvg] = useState(null)

  // useEffect(() => {
  //   services.getOpenings()
  //     .then(intitialOpenings => setData(intitialOpenings))
  //   setData(services.openings)
  //   services.getReviewsList()
  //     .then(response => {
  //       setReviewsList(response.reviews) 
  //     })
  //   services.getRatingAvg()
  //     .then(response => setReviewsAvg(response.rating))
  //   services.getRatingsQuant()
  //     .then(response => setReviewsQuant(response.user_ratings_total))
  // }, [])


  // useEffect(() => {
  //   if(openingsData && reviewsList && reviewsQuant && reviewsAvg) {
  //     setIsDataLoaded(true)
  //   }
  // }, [openingsData, reviewsList, reviewsQuant, reviewsAvg])

  if(isDataLoaded) {
    return (
        <div className="relative">
          <Router>
              <Header openingsData={openingsData} />
              {/* <div className="w-full h-36 grid grid-cols-4 opacity-55">
                <div>
                  <img src={bmw1} alt="" />
                </div>
                <div>
                  <img src={cruiser1} alt="" /> 
                </div>
                <div>
                  <img src={bmw3} alt="" />
                </div>
                <div>
                  <img src={bmw4} alt="" />
                </div>
              </div> */}
              {/* <Navbar /> */}
              <div className="flex flex-row">
                <Main openingsData={openingsData} />
                <Aside />
              </div>
          </Router>
        </div>
    )
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <img src={loading2} alt="Loading .." />
      </div>
    )
  }
}

export default App

import { useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside"
import LoadingPage from "./components/LoadingPage"
import NavBar_mobile from "./components/NavBar_mobile"
import VacationCard from "./components/VacationCard"
import PromotionCard from "./components/PromotionCard"
import { useDispatch, useSelector } from 'react-redux'
import { initializeOpeningDays } from "./app/openingsSlice"
import { initializeVacationData } from "./app/vacationsSlice"
import { initializePromotions } from "./app/promotionSlice"

function App() {
  const openingDays = useSelector(state => state.openingDays)
  const dataLoaded = (openingDays !== null)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeOpeningDays())
    dispatch(initializeVacationData())
    dispatch(initializePromotions())
  }, [])

  if(!dataLoaded) { return <LoadingPage /> } 

  return (
    <div className="relative text-black dark:bg-white">

      <Router>
          <Header openingsData={openingDays} />
          <NavBar_mobile />
          <div className="flex flex-row">
            <Main />
            <Aside />
          </div>
      </Router>

      <VacationCard />
      <PromotionCard />
    </div>
  )
}

export default App
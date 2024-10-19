import { useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside"
import LoadingPage from "./components/LoadingPage"
import NavBar_mobile from "./components/NavBar_mobile"
import VacationCard from "./components/VacationCard"
import { useDispatch, useSelector } from 'react-redux'
import { initializeOpeningDays } from "./app/openingsSlice"

function App({getState}) {
  // console.log('store:', getState());
  const openingDays = useSelector(state => state.openingDays)
  const isOnVacation = useSelector(state => state.vacation.onVacation)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeOpeningDays())
  }, [dispatch])

  if(!openingDays) { return <LoadingPage /> } 

  return (
    <div className="relative text-black">
      <Router>
          <Header openingsData={openingDays} />
          <NavBar_mobile />
          <div className="flex flex-row">
            <Main 
              openingsData={openingDays}  />
            <Aside />
          </div>
      </Router>
      {isOnVacation && (
        <VacationCard />
      )}
    </div>
  )
}

export default App
import { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside"
import services from './services/data'
import LoadingPage from "./components/LoadingPage"
import NavBar_mobile from "./components/NavBar_mobile"
import VacationCard from "./components/VacationCard"



function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [openingsData, setOpeningsData] = useState(null)
  const [onVacation, setOnVacation] = useState(true)
  const [text, setText] = useState(null)

  useEffect(() => {
    services.getAllDays()
      .then(initialOpenings => {
        setOpeningsData(initialOpenings)
        setIsDataLoaded(true)
      }) 
    
    services.getVacationsData()
      .then(response => {
        setOnVacation(response[0].onVacation)
        setText(response[0].text)
      })
  }, [])

  if(!isDataLoaded) {
    return <LoadingPage />
  } else {
    return (
        <div className="relative text-black">
          <Router>
              <Header openingsData={openingsData} />
              <NavBar_mobile />
              <div className="flex flex-row">
                <Main 
                  openingsData={openingsData}
                  setOpeningsData={setOpeningsData}   />
                <Aside />
              </div>
          </Router>
          {onVacation && (
            <VacationCard  text={text}/>
          )}
        </div>

    )
  }
}

export default App
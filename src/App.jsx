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


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(true)
  const [openingsData, setOpeningsData] = useState(null)

  useEffect(() => {
    services.getAllDays()
      .then(initialOpenings => setOpeningsData(initialOpenings)) 
  }, [])

  useEffect(() => {
    console.log(openingsData)
  }, [openingsData])

  if(!isDataLoaded) {
    return <LoadingPage />
  } else {
    return (
        <div className="relative">
          <Router>
              <Header openingsData={openingsData} />
              <div className="flex flex-row">
                <Main openingsData={openingsData} />
                <Aside />
              </div>
          </Router>
        </div>
    )
  }
}

export default App
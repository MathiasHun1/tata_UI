import { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import loading2 from './assets/loading2.gif'
import Header from "./components/Header"
import Main from "./components/Main"
import Aside from "./components/Aside"
import services from './services/data'


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [openingsData, setOpeningsData] = useState(null)

  useEffect(() => {
    services.getAllDays()
      .then(initialOpenings => setOpeningsData(initialOpenings)) 
  }, [])

  useEffect(() => {
    console.log(openingsData)
  }, [openingsData])

  if(isDataLoaded) {
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
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <img src={loading2} alt="Loading .." />
      </div>
    )
  }
}

export default App

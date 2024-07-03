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
import szerelo from './assets/szerelo.jpeg'



function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(true)
  const [openingsData, setOpeningsData] = useState(null)

  const backGroundStyle = {
    backgroundImage: `url(${szerelo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    filter: 'blur(2px)',
    filter: 'opacity(0.15)'
  }

  useEffect(() => {
    services.getAllDays()
      .then(initialOpenings => setOpeningsData(initialOpenings)) 
  }, [])

  if(!isDataLoaded) {
    return <LoadingPage />
  } else {
    return (
        <div className="relative">
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

          {/* <div style={backGroundStyle} className="absolute w-full h-full top-0 top-52 -z-10">
          </div> */}
        </div>

    )
  }
}

export default App
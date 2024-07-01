import {Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"
import Admin from './pages/Admin'

function Main({openingsData, setOpeningsData}) {
  return (
    <main className=" w-full pt-14">
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contacts' element={<Contacts openingsData={openingsData} />}/>
        <Route path='/admin' element={<Admin setOpeningsData={setOpeningsData} />}/>
      </Routes>
    </main>
  )
}

export default Main
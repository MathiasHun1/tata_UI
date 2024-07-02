import {Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"
import Admin from './pages/Admin'
import szerelo from '../assets/szerelo.jpeg'

function Main({openingsData, setOpeningsData}) {
  const backGroundStyle = {
    backgroundImage: `url(${szerelo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(5px)' 
  }

  return (
      <main className=" w-full min-h-96 pt-14 flex justify-center">
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
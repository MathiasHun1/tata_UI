import {Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"
import Admin from './pages/Admin'

function Main() {

  return (
      <main className=" w-full min-h-96 sm:pt-14 flex justify-center z-10">
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </main>
  )
}

export default Main
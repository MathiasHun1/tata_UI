import {Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"

function Main({openingsData}) {
  return (
    <main className=" w-full pt-14">
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contacts' element={<Contacts openingsData={openingsData} />}/>
      </Routes>
    </main>
  )
}

export default Main
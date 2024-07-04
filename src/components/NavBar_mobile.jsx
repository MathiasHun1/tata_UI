import { useState } from "react"
import { MaterialSymbol } from "react-material-symbols"
import NavButton from "./NavButton"
import { Link } from "react-router-dom"
import { mapRedirectUrl } from "./helpers"
import Phone_num from "./Phone_num"

function NavBar_mobile() {
  const [menuOpened, setMenuopened] = useState(false)

  const toggleMenu = () => {
    setMenuopened(!menuOpened)
  }


  return (
    <>
      <div className="sm:hidden h-16 bg-sky-400 flex flex-row items-center justify-between  sticky top-0 z-20">

        <div className="pl-2 flex items-center text-sm gap-8 relative">
        <a className='text-blue-800 hover:underline' href={mapRedirectUrl} target="_blank">1201 Budapest Szondi utca 11</a>
          <span><Phone_num /></span>
        </div>

        <div className="hover:cursor-pointer" onClick={toggleMenu}>
          <MaterialSymbol icon="menu" size={54} fill={false} grade={-25} color='white'/>
        </div>

        <nav className={`absolute bg-sky-400 opacity-0 w-full flex flex-col items-center justify-center top-16 pointer-events-none 
        ${menuOpened ? "animate-opens pointer-events-auto flex" : "hidden"}`}>
          <Link to={'/about'} style={{'width': '100%'}}>
            <NavButton text={'Rólam'} toggleMenu={toggleMenu}/>
          </Link>
          <Link to={'/gallery'} style={{'width': '100%'}}>
            <NavButton text={'Galéria'} toggleMenu={toggleMenu}/>
          </Link>
          <Link to={'/contacts'} style={{'width': '100%'}}>
            <NavButton text={'Kapcsolat'} toggleMenu={toggleMenu}/>
          </Link>

          
        </nav>

      </div>
    </>
  )
}

export default NavBar_mobile
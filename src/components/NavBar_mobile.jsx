import { useState } from "react"
import { MaterialSymbol } from "react-material-symbols"
import NavButton from "./NavButton"
import { Link } from "react-router-dom"

function NavBar_mobile() {
  const [menuOpened, setMenuopened] = useState(false)

  const toggleMenu = () => {
    setMenuopened(!menuOpened)
  }


  return (
    <>
      <div className="sm:hidden h-16 bg-sky-400 flex flex-row items-center justify-between  sticky top-0">

        <div className="flex items-center text-sm gap-8 relative">
          <span>1201 Bp Szondi utca 11</span>
          <span>+36(30) 414 7026</span>
        </div>

        <div className="hover:cursor-pointer" onClick={toggleMenu}>
          <MaterialSymbol icon="menu" size={54} fill={false} grade={-25} color='white'/>
        </div>

        <nav className={`absolute bg-sky-400 opacity-0 w-full flex flex-col items-center justify-center top-16
        ${menuOpened ? "animate-opens" : ""}`}>
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
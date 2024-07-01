import { useState, useEffect } from "react"
import { SocialIcon } from 'react-social-icons'
import Button from "./Button"
import { Link } from 'react-router-dom'

function Navbar() {
  const [active, setActive] = useState(null)

  return (
    <div className="relative">
      <nav className='w-full absolute top-10 flex items-center justify-around'
        >
          <div className="rounded-md overflow-hidden">
            <Link to={'/about'}>
              <Button active={active} setActive={setActive} text='Rólam' />
            </Link>
            <Link to={'/gallery'}>
              <Button active={active} setActive={setActive} text='Galéria' />
            </Link>
            <Link to={'/contacts'}>
              <Button active={active} setActive={setActive} text='Kapcsolat' />
            </Link>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
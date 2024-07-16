function NavButton({text, toggleMenu}) {
  return (
    <button onClick={toggleMenu} className="w-full text-center p-2 hover:bf.sky-900 hover:bg-sky-900 hover:text-zinc-100 hover:cursor-pointer border-t-2 z-30">{text}</button>
  )
}

export default NavButton
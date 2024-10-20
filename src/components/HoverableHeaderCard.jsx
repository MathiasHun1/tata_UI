import { useState } from "react"
import { translateDay, transformOpening } from "./helpers"
import { useSelector } from "react-redux"

function HoverableHeaderCard({ children }) {
  const [isHovered, setIsHovered] = useState(false)
  const openingDays = useSelector(state => state.openingDays)

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center gap-2 hover:cursor-pointer relative">
      {children}
      
      {isHovered && (
        <div className="p-2 bg-zinc-100 text-black rounded-md w-max absolute top-10 shadow-md shadow-gray-400 opacity-0 animate-opens z-10">
          {openingDays.map(item => 
          <p key={item.day} className="w-max p-1">{`${translateDay(item.day)}: ${transformOpening(item.open, item.close)}`}</p>)}
        </div>
      )}
    </div>
  )
}

export default HoverableHeaderCard
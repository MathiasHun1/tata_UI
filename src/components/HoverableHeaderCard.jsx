import { useState } from "react"

function HoverableHeaderCard({children, openingsData}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center gap-2 hover:cursor-pointer relative">
      {children}
      {isHovered && (
        <div className="p-2 bg-zinc-100 text-black rounded-md w-max absolute top-10 shadow-md shadow-gray-400 opacity-0 animate-opens z-10">
          {openingsData.weekday_text.map(text => 
          <p key={text} className="w-max p-1">{text}</p>)}
        </div>
      )}
    </div>
  )
}

export default HoverableHeaderCard
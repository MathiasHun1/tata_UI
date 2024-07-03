import { useState } from "react"

function ImageCard({ image, style, setClickedImage }) {
  const [opened, setOpened] = useState(false)

  return (
    <div style={style} onClick={() => setClickedImage(image)} className={`rounded-md w-40 h-32 hover:cursor-pointer7 overflow-hidden`}>
      <img src={image} alt="" className={`w-full h-full object-cover`}/>
    </div>
  )
}

export default ImageCard
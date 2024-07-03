
function ImageCard({ image, style, setClickedImage }) {

  return (
    <div style={style} onClick={() => setClickedImage(image)} className={`rounded-md w-40 h-32 hover:cursor-pointer overflow-hidden hover:scale-105`}>
      <img src={image} alt="" className={`w-full h-full object-cover`}/>
    </div>
  )
}

export default ImageCard
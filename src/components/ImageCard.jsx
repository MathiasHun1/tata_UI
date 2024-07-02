
function ImageCard({ image }) {
  return (
    <div className="rounded-md w-40 h-32 overflow-hidden hover:cursor-pointer">
      <img src={image} alt="" className="w-full h-full object-cover"/>
    </div>
  )
}

export default ImageCard
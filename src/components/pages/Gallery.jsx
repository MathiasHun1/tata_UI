import ImageCard from '../ImageCard'
import fblogo from '../../assets/fblogo.svg'
import szerelo from '../../assets/szerelo.jpeg'
import muhely1 from '../../assets/muhely-1.jpeg'
import muhely2 from '../../assets/muhely-2.jpeg'
import muhely3 from '../../assets/muhely-3.jpeg'
import muhely4 from '../../assets/muhely-4.jpeg'
import muhely5 from '../../assets/muhely-5.jpeg'
import motor1 from '../../assets/motor-1.jpeg'
import motor2 from '../../assets/motor-2.jpeg'
// import motor3 from '../../assets/motor-3.jpeg'
import motor4 from '../../assets/motor-4.jpeg'
import motor5 from '../../assets/motor-5.jpeg'
import motor7 from '../../assets/motor-7.jpeg'
import motor8 from '../../assets/motor-8.jpeg'
import motor9 from '../../assets/motor-9.jpeg'
import motor10 from '../../assets/motor-10.jpeg'
import motor11 from '../../assets/motor-11.jpeg'
import motor12 from '../../assets/motor-12.jpeg'
import motor13 from '../../assets/motor-13.jpeg'
import motor14 from '../../assets/motor-14.jpeg'
import motor15 from '../../assets/motor-15.jpeg'
import motor16 from '../../assets/motor-16.jpeg'

function Gallery() {
  return (
    <div className='max-w-5xl pt-8 sm:pt-0'>
      <h1 className='text-center text-xl'>
        A Műhely
      </h1>

      <div className="p-2 flex flex-wrap flex-row items-center justify-center gap-3 ">
        <ImageCard image={muhely1} />
        <ImageCard image={muhely2} />
        <ImageCard image={muhely3} />
        <ImageCard image={muhely5} />
        <ImageCard image={muhely4} />
      </div>

      <h1 className='text-center text-xl mt-4'>
        Munkáim
      </h1>

      <div className="p-4 flex flex-wrap flex-row items-center justify-center gap-3 ">
        <ImageCard image={motor7} />
        <ImageCard image={motor11} />
        <ImageCard image={motor16} />
        <ImageCard image={motor1} />
        <ImageCard image={motor12} />
        {/* <ImageCard image={motor3} /> */}
        <ImageCard image={motor4} />
        <ImageCard image={motor2} />
        <ImageCard image={motor5} />
        <ImageCard image={motor8} />
        <ImageCard image={motor9} />
        <ImageCard image={motor10} />
        <ImageCard image={motor13} />
        <ImageCard image={motor14} />
        <ImageCard image={motor15} />
    
      </div>
    </div>
  )
}

export default Gallery
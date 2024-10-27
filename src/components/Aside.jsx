import googleImg from '../assets/google-logo.svg'
import StarsSVGs from "./StarsSVGs"
import fblogo from '../assets/fblogo.svg'
import { mapRedirectUrl } from "./helpers"

function Aside() {
  return (
    <aside className="flex flex-col items-center hidden sm:flex">

      <div className="card w-64 bg-white shadow-none pt-8 pb-12 border-b-2 w-66   text-center rounded-none flex flex-col items-center">
        <p className="text-xl"><strong>Kövess itt is:</strong></p>
        <a href='https://www.facebook.com/pong.ping.96592' target='_blank'>
          <img className="" src={fblogo} alt="" style={{width: '120px'}} />
        </a>
      </div>

      <a href={mapRedirectUrl} target="_blank" className="card w-64 bg-white shadow-none pt-8 pb-12 border-b-2 w-66   text-center rounded-none flex flex-col items-center">
        <div className="flex flex-col items-center pt-2">
          <strong className="text-xl">Értékelésem:</strong>
          <StarsSVGs rating={5}/>
        </div>
      
        <img src={googleImg} alt="" className="w-32 pt-2"/>
      </a>
        
    </aside>
  )
}


export default Aside
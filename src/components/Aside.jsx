import { Fragment } from "react"
import ReviewCard from "./ReviewCard"
import googleImg from '../assets/google-logo.svg'
import StarsSVGs from "./StarsSVGs"
import fblogo from '../assets/fblogo.svg'
import { mapRedirectUrl } from "./Mapcomponent"


function Aside({isDataLoaded, reviewsList, reviewsAvg, reviewsQuant}) {
  return (
    <aside className="flex flex-col items-center ">
      <div className="card w-64 bg-white shadow-none pt-8 pb-12 border-b-2 w-66   text-center rounded-none flex flex-col items-center">
        <p className="text-xl"><strong>Kövess itt is:</strong></p>
        <a href='https://www.facebook.com/pong.ping.96592' target='_blank'>
          <img className="" src={fblogo} alt="" style={{width: '120px'}} />
        </a>
      </div>
      <a href={mapRedirectUrl} target="_blank" className="card w-64 bg-white shadow-none pt-8 pb-12 border-b-2 w-66   text-center rounded-none flex flex-col items-center">
        <div className="flex flex-col items-center pt-2">
          <strong>Értékelésem:</strong>
          <StarsSVGs rating={5}/>
        </div>
        <p><strong>37 vélemény </strong>alapján</p>
        <img src={googleImg} alt="" className="w-32 pt-2"/>
      </a>
        {/* {isDataLoaded && (
            reviewsList.map(r => (
            <Fragment key={r.author_name}>
              <ReviewCard review={r} />
            </Fragment>
          ))
          )} */}
    </aside>
  )
}


export default Aside
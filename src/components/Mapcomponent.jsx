import {APIProvider, Map, Marker, AdvancedMarker} from '@vis.gl/react-google-maps';

const center = {
  lat: 47.430168,
  lng: 19.119180
}

const style = {width: '200px', height: '200px'}

const mapRedirectUrl = 'https://www.google.com/maps/place/TataMoto+motorker%C3%A9kp%C3%A1r+jav%C3%ADt%C3%A1s+%C3%A9s+szerv%C3%ADz+Budapest/@47.430268,19.1165048,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd453e059039:0x104d089ff016db66!8m2!3d47.4302644!4d19.1190797!16s%2Fg%2F11q2qslpqq?hl=hu&entry=ttu'

function Mapcomponent({style}) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={style}
        defaultCenter={center}
        defaultZoom={14}
        gestureHandling={'none'}
        disableDefaultUI={false}
        onClick={() => window.open(mapRedirectUrl, '_blank')}
      >
        <Marker position={center}/>
        {/* <AdvancedMarker position={center}/> */}
      </Map>
    </APIProvider>
  )
}

// export default Mapcomponent
export {mapRedirectUrl}
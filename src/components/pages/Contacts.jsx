import MapIframe from '../MapIframe';
import fblogo from '../../assets/fblogo.svg'
import { mapRedirectUrl } from '../helpers';
import { translateDay, transformOpening } from '../helpers';
import LoadingPage from '../LoadingPage';

const mapStyle = {
  width: '100%',
  maxWidth: '250px',
  // height: '500px',
  borderRadius: '20px',
  aspectRatio: '1',
  overflow: 'hidden' // Ensure the map respects the border radius
};

function Contacts({openingsData}) {

  if (!openingsData) {
    return <LoadingPage />
  } else {
    return (
      <div className='max-w-4xl px-12 pt-8 mx-auto flex flex-col items-center gap-10'>
        <section className='text-xl '>

          <p><strong>Cím:</strong> <a className='hover:text-sky-400 hover:underline' href={mapRedirectUrl} target='_blank'>1201 Budapest, Szondi utca 11</a></p>

          <p><strong>Telefon:</strong> +36 30 4147026</p>
        </section>

        <MapIframe mapStyle={mapStyle} /> 

        <div className='w-full text-xl flex flex-start'>
          <ul >
            <strong>Nyitvatartás:</strong>
            {openingsData.map(element =>
            <li key={element.day} className="w-max mb-1">{`${translateDay(element.day)}: ${transformOpening(element.open, element.close)}`}</li>)}
          </ul>
        </div>

        <a href='https://www.facebook.com/pong.ping.96592' target='_blank' className='flex flex-row items-center gap-1'>Kövess <span><img src={fblogo} alt="" style={{width: '100px'}} /></span>-on!
        </a>
      </div>
    )
  }
}

export default Contacts
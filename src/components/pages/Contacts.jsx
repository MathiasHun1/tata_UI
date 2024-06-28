import MapIframe from '../MapIframe';
import {mapRedirectUrl} from '../Mapcomponent'
import fblogo from '../../assets/fblogo.svg'

const mapStyle = {
  width: '100%',
  maxWidth: '250px',
  // height: '500px',
  borderRadius: '20px',
  aspectRatio: '1',
  overflow: 'hidden' // Ensure the map respects the border radius
};

function Contacts({openingsData}) {
  return (
    <div className='max-w-4xl px-12 pt-8 mx-auto text-md flex flex-col items-center gap-10'>
      <section className='text-xl flex flex-col gap-4'>


        <p><strong>Cím:</strong> <a className='hover:text-sky-400 hover:underline' href={mapRedirectUrl} target='_blank'>1201 Budapest, Szondi utca 11</a></p>


        <p><strong>Telefon:</strong> +36 30 4147026</p>

      </section>
      <section className='w-full h-full  flex flex-wrap justify-center gap-4'>
        <ul>
          <strong>Nyitvatartás:</strong>
          {openingsData.weekday_text.map(text =>
            <p key={text} className="w-max p-1">{text}</p>)}
        </ul>
        <MapIframe mapStyle={mapStyle} />      </section>
        <a href='https://www.facebook.com/pong.ping.96592' target='_blank' className='flex flex-row items-center gap-1'>Kövess <span><img src={fblogo} alt="" style={{width: '100px'}} /></span>-on!
        </a>
    </div>
  )
}

export default Contacts
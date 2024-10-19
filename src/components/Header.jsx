import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'
import HeaderCard from './HeaderCard'
import HoverableHeaderCard from './HoverableHeaderCard';
import Navbar from './Navbar';
import { mapRedirectUrl, translateDay, checkIfOpen, transformOpening, getDayIndex } from './helpers';
import logo3 from '../assets/tatamoto-fekete.svg'
import Phone_num from './Phone_num'
import { useSelector } from 'react-redux';

function Header() {
  const openingDays = useSelector(state => state.openingDays)
  const isOpenNow = checkIfOpen(openingDays)
  const todayData = openingDays[getDayIndex()]

  return (
    <header className='sm:h-56 pt-6 pb-4 sm:pb-0  text-zinc-100 flex items-center sm:items-start flex-col sm:flex-row bg-black bg-gradient-to-r from-neutral-950 to-neutral-500 sm:sticky top-0 z-20'>

      <div className='flex gap-2 items-center absolute top-0 left-0'>
        <div className=''>
          <MaterialSymbol icon="circle" size={20} fill={true} grade={-25} color={`${isOpenNow ? 'lime' : 'red'}`} />
        </div>
        <p className={`${isOpenNow ? 'text-lime-300' : 'text-red-500'}`}>{isOpenNow ? 'Jelenleg nyitva' : 'Jeleneleg zárva'}
        </p>
      </div>

      <div>
        <div className="bg-white bg-center bg-no-repeat w-28 sm:w-44 h-28 sm:h-44 rounded-full sm:absolute sm:right-12" style={{ backgroundImage: `url(${logo3})`, backgroundSize: '85%' }}>
        </div>
      </div>

      <div className='sm:w-[calc(100vw-16rem)] pt-4'>
        <div className='flex flex-col items-center'>
          <h1 className='sm:text-4xl text-2xl text-center mb-4'>Motorkerékpár Javítás és Szerviz</h1>
          <div className=' gap-6 hidden sm:flex'>
            <HeaderCard>
              <MaterialSymbol icon="call" size={32} fill={false} grade={-25} color='white' />
              <Phone_num />
            </HeaderCard>
            <HeaderCard className="w-28 flex flex-col items-center gap-2 hover:cursor-pointer">
            <MaterialSymbol icon="home" size={32} fill={false} grade={-25} color='white' />
              <a className='hover:text-sky-400 hover:underline' href={mapRedirectUrl} target="_blank">1201 Budapest Szondi utca 11</a>
            </HeaderCard>
        
            <HoverableHeaderCard openingsData={openingDays}>
              <MaterialSymbol icon="schedule" size={32} fill={false} grade={-25} color='white' />
                  <p>{`${translateDay(todayData.day)}: ${transformOpening(todayData.open, todayData.close)}`}
                    </p>
            </HoverableHeaderCard>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
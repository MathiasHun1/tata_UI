import logo from '../assets/tatamoto.jpg'
import logo2 from '../assets/logo2.jpeg'
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'
import HeaderCard from './HeaderCard'
import HoverableHeaderCard from './HoverableHeaderCard';
import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { mapRedirectUrl, translateDay, checkIfOpen, transformOpening } from './helpers';

function Header({openingsData}) {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isOpenNow, setIsopenNow] = useState(true)
  const [todayData, setTodayData] = useState(null)
  
  useEffect(() => {
    if(openingsData) {
      setIsDataLoaded(true)
      setIsopenNow(true)
      setTodayData(openingsData[new Date().getDay() - 1])
      setIsopenNow(checkIfOpen(openingsData))
    }
  }, [openingsData])

  return (
    <header className='h-56 pt-6 text-zinc-100 flex items-start bg-black bg-gradient-to-r from-neutral-950 to-neutral-500 sticky top-0 z-10'>

      <div className='flex gap-2 items-center absolute top-0 left-0'>
        <MaterialSymbol icon="circle" size={20} fill={true} grade={-25} color={`${isOpenNow ? 'lime' : 'red'}`} />
        <p className={`${isOpenNow ? 'text-lime-300' : 'text-red-500'}`}>{isOpenNow ? 'Jelenleg nyitva' : 'Jeleneleg zárva'}
        </p>
      </div>

      <div className='w-[calc(100vw-16rem)] pt-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl text-center mb-4'>Motorkerékpár Javítás és Szerviz</h1>
          <div className='flex gap-6'>
            <HeaderCard>
              <MaterialSymbol icon="call" size={32} fill={false} grade={-25} color='white' />
              <p>+36(30) 414 7026</p>
            </HeaderCard>
            <HeaderCard className="w-28 flex flex-col items-center gap-2 hover:cursor-pointer">
            <MaterialSymbol icon="home" size={32} fill={false} grade={-25} color='white' />
              <a className='hover:text-sky-400 hover:underline' href={mapRedirectUrl} target="_blank">1201 Budapest Szondi utca 11</a>
            </HeaderCard>
        
            <HoverableHeaderCard openingsData={openingsData}>
              <MaterialSymbol icon="schedule" size={32} fill={false} grade={-25} color='white' />
              {isDataLoaded && (
                <>
                  <p>{`${translateDay(todayData.day)}: ${transformOpening(todayData.open, todayData.close)}`}
                    </p>
                </>
              )}
            </HoverableHeaderCard>
          </div>
        </div>
        <Navbar />
      </div>

      <div>
        <div className="bg-white bg-center bg-no-repeat w-44 h-44 rounded-full absolute right-12" style={{ backgroundImage: `url(${logo2})`, backgroundSize: '95%' }}>
        </div>
      </div>
     
    </header>
  )
}

export default Header
import logo from '../assets/tatamoto.jpg'
import logo2 from '../assets/logo2.jpeg'
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'
import HeaderCard from './HeaderCard'
import HoverableHeaderCard from './HoverableHeaderCard';
import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { mapRedirectUrl, translateDay, checkIfOpen, transformOpening } from './helpers';
import logo3 from '../assets/tatamoto-fekete.svg'

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
    <header className='sm:h-56 pt-6 pb-4 sm:pb-0  text-zinc-100 flex items-center sm:items-start flex-col sm:flex-row bg-black bg-gradient-to-r from-neutral-950 to-neutral-500 sm:sticky top-0 z-20'>

      {/* <div className='sm:hidden '>
        <MaterialSymbol icon="menu" size={52} fill={false} grade={-25} color='white' />
      </div> */}

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
    </header>
  )
}

export default Header
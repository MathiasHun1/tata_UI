import { useState, useEffect } from "react"
import vacationPic from '../assets/vacation1.jpg'
import { MaterialSymbol } from 'react-material-symbols'
import 'react-material-symbols/rounded'
import { useSelector } from 'react-redux'

function VacationCard() {
  const visibleByDefault = useSelector(state => state.vacation.onVacation)
  const text = useSelector(state => state.vacation.text)
  const [ visibleLocally, setVisibleLocally ] = useState(false)

  useEffect(() =>{
    setVisibleLocally(visibleByDefault)
  }, [visibleByDefault])

  return (
    <div className={`w-full h-screen absolute top-0 z-20 bg-gray-800 bg-opacity-60 flex justify-center items-center ${visibleLocally ? '' : 'hidden'}`}>
      <div className="p-10 w-5/6 h-5/6 max-w-2xl max-h-[calc(80vh)] bg-white rounded-md relative">

        <h1 className="mb-8 text-2xl font-bold text-center">Tisztelt Ügyfeleim!
        </h1>

        <p className="text-justify text-xl" >
          {text}
        </p>


        <div className="inline-flex border-2 border-black absolute top-5 right-5 hover:cursor-pointer" onClick={() => setVisibleLocally(false)}>
          <MaterialSymbol icon="close" size={25} fill={true} grade={-25} color='black' />
        </div>

        <img src={vacationPic} alt="" className="w-3/4 mx-auto mt-6" />
      
        <p className="text-center mt-6 text-xl">
        ― Tatamoto ―
        </p>
      </div>
    </div>
  )
}

export default VacationCard
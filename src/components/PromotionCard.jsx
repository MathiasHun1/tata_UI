import { MaterialSymbol } from 'react-material-symbols'
import 'react-material-symbols/rounded'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import promotionPic from '../assets/akcio.jpg'


const PromotionCard = ({getState}) => {
  const visibleByDefault = useSelector(state => state.promotion.onPromotion)
  const text = useSelector(state => state.promotion.text)
  const [ visibleLocally, setVisibleLocally ] = useState(false)

  useEffect(() =>{
    setVisibleLocally(visibleByDefault)
  }, [visibleByDefault])

  return (
    <div className={`w-full h-screen absolute top-0 z-20 bg-gray-800 bg-opacity-60 flex justify-center items-center ${visibleLocally ? '' : 'hidden'} `}>
      <div className="p-10 pt-2 w-5/6 h-5/6 max-w-2xl max-h-[calc(80vh)] bg-white rounded-md relative">

        <p className="text-2xl mb-2 text-red-600 font-bold text-center">Szezon-végi AKCIÓ!
        </p>
        <img src={promotionPic} alt="" className="w-40 mx-auto" />

        <p className="text-justify text-xl">{text}</p>

        <div className="inline-flex border-2 border-black absolute top-5 right-5 hover:cursor-pointer" onClick={() => setVisibleLocally(false)}>
          <MaterialSymbol icon="close" size={25} fill={true} grade={-25} color='black' />
        </div>

      
      </div>
        <p className="text-center w-auto text-xl absolute bottom-20">
        ― Tatamoto ―
        </p>
    </div>
  )
}

export default PromotionCard
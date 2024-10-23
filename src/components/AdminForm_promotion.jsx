import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Checkbox } from "@mui/material"
import { saveNewPromotion } from "../app/promotionSlice"
import SuccessMessage from "./SuccessMessage"
import ErrorMessage from "./ErrorMessage"

const AdminForm_promotion = ({ logOut }) => {
    const [checked, setChecked] = useState(false)
    const [fieldText, setFieldText] = useState('')
    const [ successMessageOn, setSuccessMessage ] = useState(false) 
    const [ errorMessage, setErrormessage ] = useState(false) 

    const isPromoRunning = useSelector(state => state.promotion.onPromotion)
    const promtotionText = useSelector(state => state.promotion.text)

    const dispatch = useDispatch()

    useEffect(() => {
        setChecked(isPromoRunning)
        setFieldText(promtotionText)
    }, [isPromoRunning, promtotionText])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await dispatch(saveNewPromotion({ onPromotion: checked, text: fieldText }))
            setSuccessMessage(true)
            setTimeout(() => { setSuccessMessage(false) }, 3000)
        } catch (error) {
            setErrormessage(true)
            setTimeout(() => { setErrormessage(false) }, 3000)
            console.log(error);
        }
    }

    const toggleOnPromotion = () => {
        setChecked(!checked)
    }

    const handlePromoTextInput = (e) => {
        setFieldText(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-300 w-full p-4 pb-8 w-fit h-fit flex flex-col items-center gap-2 rounded-md">

        <div  className=" flex flex-row items-center gap-1">
            <p className="font-bold text-lg">Futó promóció</p>
            <Checkbox 
                checked={checked} 
                onChange={toggleOnPromotion} 
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
        <textarea className="w-full h-36 bg-white" value={fieldText} onChange={handlePromoTextInput}>
        </textarea>

        <div>
            <button className="btn w-28 bg-green-300 hover:bg-green-400 text-black" type="submit">
                Mentés
            </button>
            <button type="button" className="btn w-28 bg-red-300 hover:bg-red-400 text-black" onClick={logOut}>
                Kijelentkezek
            </button>
        </div>
        {successMessageOn && (<SuccessMessage />)}
        {errorMessage && (<ErrorMessage />)}
    </form>
  )
}

export default AdminForm_promotion
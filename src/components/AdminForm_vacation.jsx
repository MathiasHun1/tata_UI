import { Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { saveVacationData } from "../app/vacationsSlice"
import SuccessMessage from "./SuccessMessage"
import ErrorMessage from "./ErrorMessage"

const AdminForm_vacation = ({ logOut }) => {
    const [checked, setChecked] = useState(false)
    const [fieldText, setFieldText] = useState('')
    const [ successMessageOn, setSuccessMessage ] = useState(false) 
    const [ errorMessage, setErrormessage ] = useState(false)
    
    const vacationsText = useSelector(state => state.vacation.text)
    const isVacationRunning = useSelector(state => state.vacation.onVacation)
    
    const dispatch = useDispatch()

    useEffect(() => {
        setChecked(isVacationRunning)
        setFieldText(vacationsText)
    }, [vacationsText, isVacationRunning])

    const handleChange = () => {
        setChecked(!checked)
    }

    const handleVacationsTextInput = (e) => {
        setFieldText(e.target.value)
    }

    const submitVacation = async (e) => {
        e.preventDefault()
        try {
            const updatedData = { onVacation: checked, text: fieldText}
            await dispatch(saveVacationData(updatedData))
            setSuccessMessage(true)
            setTimeout(() => { setSuccessMessage(false) }, 3000)
        } catch (error) {
            setErrormessage(true)
            setTimeout(() => { setErrormessage(false) }, 3000)
            console.log(error);
        }
    }

  return (
    <form onSubmit={submitVacation} className="bg-gray-300 w-full p-4 pb-8 w-fit h-fit flex flex-col items-center gap-2 rounded-md">

        <div  className=" flex flex-row items-center gap-1">
            <p className="font-bold text-lg">Szabira mentem</p>
            <Checkbox 
                checked={checked} 
                onChange={handleChange} 
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
        <textarea className="w-full h-36 bg-white" value={fieldText} onChange={handleVacationsTextInput}>
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

export default AdminForm_vacation
import { Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { saveVacationData } from "../app/vacationsSlice"

const AdminForm_vacation = ({ logOut }) => {
    const [checked, setChecked] = useState(false)
    const [fieldText, setFieldText] = useState('')
    const vacationsData = useSelector(state => state.vacation)
    
    const dispatch = useDispatch()

    useEffect(() => {
        setFieldText(vacationsData.text)
    }, [vacationsData.text])

    const handleChange = () => {
        setChecked(!checked)
    }

    const handleVacationsTextInput = (e) => {
        setFieldText(e.target.value)
    }

    const submitVacation = (e) => {
        e.preventDefault()
        const updatedData = { onVacation: checked, text: fieldText}
        dispatch(saveVacationData(updatedData))
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

    </form>
  )
}

export default AdminForm_vacation
import { useDispatch } from "react-redux"
import { updateDay } from "../app/openingsSlice"
import { useState } from "react"
import Checkbox from '@mui/material/Checkbox'
import SuccessMessage from "./SuccessMessage"
import ErrorMessage from "./ErrorMessage"

const AdminForm_openings = ({ logOut }) => {
  const [checked, setChecked] = useState(false)
  const [formData, setFormData ] = useState({
    day: 'monday',
    open: '',
    close: ''
  })
  const [ successMessageOn, setSuccessMessage ] = useState(false) 
  const [ errorMessage, setErrormessage ] = useState(false) 

  const dispatch = useDispatch()


  const submitDayOpening = async (e) => {
    e.preventDefault()

    let dayObject = { ...formData }
    if(checked) {
      dayObject.open = null
      dayObject.close = null
    }

    try {
      await dispatch(updateDay(dayObject))
  
      setFormData({
        day: 'monday',
        open: '',
        close: ''
      })
  
      setChecked(false)
      setSuccessMessage(true)
      setTimeout(() => { setSuccessMessage(false) }, 3000)
    } catch (error) {
      console.log(error);
      
      setErrormessage(true)
      setTimeout(() => { setErrormessage(false) }, 3000)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <form onSubmit={submitDayOpening} className="bg-gray-300 p-4 pb-8 w-fit h-fit flex flex-col items-center gap-2 rounded-md">
        <p className="font-bold text-lg">Nyitvatartás</p>
        <p>*formátum: ÓÓ.PP (pl: 8.00 - 16.30)</p>
        <div className="flex gap-2 h-8">

          <select className="bg-white" name="day" value={formData.day} onChange={handleInputChange}>
            <option value="monday">Hétfő</option>
            <option value="tuesday">Kedd</option>
            <option value="wednesday">Szerda</option>
            <option value="thursday">Csütörtök</option>
            <option value="friday">Péntek</option>
            <option value="saturday">Szombat</option>
            <option value="sunday">Vasárnap</option>
          </select>

          <div>
            <input type="number" name="open" value={formData.open} onChange={handleInputChange} disabled={checked} className={`w-16 h-full ${checked ? 'bg-red-400' : 'bg-white'}`}/>
            <span> - </span>
            <input type="number" name="close" value={formData.close} onChange={handleInputChange} disabled={checked} className={`w-16 h-full ${checked ? 'bg-red-400' : 'bg-white'}`}/>
          </div>
          
          <div className=" flex flex-row items-center gap-1">
              Zárva
              <Checkbox
                checked={checked} 
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            
          </div>
          
        </div>
        <br />
        <div>
          <button className="btn w-28 bg-green-300 hover:bg-green-400 text-black" type="submit">
            Mentés
          </button>
          <button type='button' className="btn w-28 bg-red-300 hover:bg-red-400 text-black" onClick={logOut}>
            Kijelentkezek
          </button>
        </div>
        {successMessageOn && (<SuccessMessage />)}
        {errorMessage && (<ErrorMessage />)}
      </form>
  )
}

export default AdminForm_openings
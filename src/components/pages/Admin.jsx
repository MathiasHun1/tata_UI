import { useEffect, useState } from "react"
import loginService from '../../services/login'
import { useDispatch, useSelector } from 'react-redux'
import { initializeVacationData } from "../../app/vacationsSlice"
import ErrorMessage from "../ErrorMessage"
import { updateDay } from "../../app/openingsSlice"
import { setErrorMessage } from "../../app/messageSlice"

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [passText, setPassText] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [formData, setFormData ] = useState({
    day: 'monday',
    open: '',
    close: ''
  })

  const vacationsData = useSelector(state => state.vacation)

  const dispatch = useDispatch()
  
  useEffect(() => {
    if(isChecked === true) {
      const data = {
        ...formData,
        open: null,
        close: null 
      }
      setFormData(data)
    }
  }, [isChecked])

  useEffect(() => {
    dispatch(initializeVacationData())
  }, [dispatch])

  const toggleVacation = () => {
    const vacationObj = {...vacationsData}
    vacationObj.onVacation = !vacationObj.onVacation

    setVacationsData(vacationObj)
    console.log(vacationObj);
  }

  const submitVacation = (e) => {
    e.preventDefault()
    services.updateVacations(vacationsData)
      .then(r => {
        setSuccessMessage2(true)
        setTimeout(() => {
          setSuccessMessage2(null)
        }, 4000)
      })
  }

  const handleVacationsTextInput = (e) => {
    const vacationObj = {...vacationsData}
    vacationObj.text = e.target.value
    setVacationsData(vacationObj)
  }

  const handlePassInputChange = (e) => {
    setPassText(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await loginService.login(passText)
      setIsLoggedIn(true)
    } catch (error) {
      dispatch(setErrorMessage('hibas jelszo'))
      setTimeout(() => {
        dispatch(setErrorMessage(''))
      }, 3000)
    }

    setPassText('')
  }

  const logOut = () => {
    setIsLoggedIn(false)
    setPassText('')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const toggleRadio = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const dayObject = {
        day: formData.day,
        open: formData.open,
        close: formData.close
      }
  
      dispatch(updateDay(dayObject))
    } catch (error) {
      if (error) {
        console.log(error);
        
        setErrorMessage('Valamit rosszul írtál Kutya')
        setTimeout(() =>{
          setErrorMessage('')
        }, 3000)
      }
    }

    setFormData({
      day: 'monday',
      open: '',
      close: ''
    })
    setIsChecked(false)
  }

  if(isLoggedIn) {
    return (
      <div className="flex flex-col justify-center gap-6">
        <div className="flex flex-col items-center ">
          <form onSubmit={handleSubmit} className="bg-gray-300 p-4 pb-8 w-fit h-fit flex flex-col items-center gap-2 rounded-md">
            <p className="font-bold text-lg">Nyitvatartás</p>
            <p>*formátum: ÓÓ.PP (pl: 8.00 - 16.30)</p>
            <div className="flex gap-2">
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
                <input type="number" value={formData.open} name="open" onChange={handleInputChange} className={`w-16 ${isChecked ? 'bg-red-400' : ''} bg-white`}/>
                <span> - </span>
                <input type="number" value={formData.close} name="close" onChange={handleInputChange} className={`w-16 ${isChecked ? 'bg-red-400' : ''} bg-white`}/>
              </div>
              
              <div onClick={toggleRadio} className=" flex flex-row items-center gap-1">
                <label>
                  Zárva
                </label>
                  <input type="radio" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className=""/>
              </div>
            </div>
            <br />
            <div>
              <button className="btn w-28 bg-green-300 hover:bg-green-400" type="submit">
                Mentés
              </button>
              <button className="btn w-28 bg-red-300 hover:bg-red-400" onClick={logOut}>
                Kijelentkezek
              </button>
            </div>
          </form>
          <ErrorMessage />
        </div>
        
        <div className="flex flex-col items-center">
          <form onSubmit={submitVacation} className="bg-gray-300 w-full p-4 pb-8 w-fit   h-fit flex flex-col items-center gap-2 rounded-md">

            <div onClick={toggleVacation} className=" flex flex-row items-center gap-1">
              <label>
                Szabira mentem
              </label>
              <input type="radio" checked={vacationsData.onVacation} onChange={toggleVacation} className=""/>
            </div>
            <textarea className="w-full h-36" value={vacationsData.text} onChange={handleVacationsTextInput}>
            </textarea>

            <button className="btn w-28 bg-green-300 hover:bg-green-400" type="submit">
              Mentés
            </button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <label>
            Jelszó:
            <input type="password" value={passText} onChange={handlePassInputChange} className="border-2 border-black px-2 dark:bg-slate-100"/>
          </label>
          <button className="btn">OK</button>
        </form>
        <ErrorMessage />
      </div>
    )
  }
}

export default Admin
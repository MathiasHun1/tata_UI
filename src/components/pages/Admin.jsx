import { useEffect, useState } from "react"
import services from '../../services/data'

function Admin({ openingsData, setOpeningsData }) {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [passText, setPassText] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [succesMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [succesMessage2, setSuccessMessage2] =useState(null)
  const [formData, setFormData ] = useState({
    day: 'monday',
    open: '',
    close: ''
  })
  const [vacationsData, setVacationsData] = useState({
    onVacation: true,
    text: ''
  })


  const pass = import.meta.env.VITE_PASS || process.env.pass
  console.log(vacationsData.text);
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
    services.getVacationsData()
      .then(result => {
        setVacationsData(result[0])
        setDataLoaded(true)
      })
  }, [])

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

  const handlePassSubmit = (e) => {
    e.preventDefault()

    if(passText === pass) {
      setIsLoggedIn(true)
      setPassText('')
    }
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

    const dayObject = {
      day: formData.day,
      open: formData.open,
      close: formData.close
    }

    services.updateDay(dayObject)
      .then(response => {
        return services.getAllDays()
      })
      .then(response => {
        setOpeningsData(response)
        setSuccessMessage(true)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 4000)
      })
      .catch(error => {
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(null)
        }, 4000)
      })

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
              <select name="day" value={formData.day} onChange={handleInputChange}>
                <option value="monday">Hétfő</option>
                <option value="tuesday">Kedd</option>
                <option value="wednesday">Szerda</option>
                <option value="thursday">Csütörtök</option>
                <option value="friday">Péntek</option>
                <option value="saturday">Szombat</option>
                <option value="sunday">Vasárnap</option>
              </select>
              <div>
                <input type="number" value={formData.open} name="open" onChange={handleInputChange} className={`w-16 ${isChecked ? 'bg-red-400' : ''}`}/>
                <span> - </span>
                <input type="number" value={formData.close} name="close" onChange={handleInputChange} className={`w-16 ${isChecked ? 'bg-red-400' : ''}`}/>
              </div>
              
              <div onClick={toggleRadio} className=" flex flex-row items-center gap-1">
                <label>
                  Zárva
                </label>
                  <input type="radio" checked={isChecked} className=""/>
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
          {succesMessage && <h1 className="p-2 w-full flex justify-center text-xl bg-lime-100 border-2 border-lime-500 rounded-xl">Mentés sikeres</h1>}
          {errorMessage && <h1 className="w-full flex justify-center p-2 text-xl bg-red-100 border-2 border-red-500 rounded-xl">Valamit elírtál, Kutya!</h1>}
        </div>

        {dataLoaded && (
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
          {succesMessage2 && <h1 className="p-2 w-full flex justify-center text-xl bg-lime-100 border-2 border-lime-500 rounded-xl">Mentés sikeres</h1>}
        </div>
        )}
      </div>
    )
  } else {
    return (
      <form onSubmit={handlePassSubmit}>
        <label>
          Jelszó:
          <input type="password" value={passText} onChange={handlePassInputChange} className="border-2 border-black px-2"/>
        </label>
        <button className="btn">OK</button>
      </form>
    )
  }
}

export default Admin
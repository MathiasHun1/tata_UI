import { useEffect, useState } from "react"
import services from '../../services/data'

function Admin({ openingsData, setOpeningsData }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [passText, setPassText] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [succesMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [formData, setFormData ] = useState({
    day: 'monday',
    open: '',
    close: ''
  })

  const pass = import.meta.env.VITE_PASS

  useEffect(() => {
    console.log(isChecked);
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
    setTimeout(() => {
      if (isLoggedIn === true) {
        setIsLoggedIn(false)
        setPassText('')
      }
    }, 500000)
  }, [isLoggedIn])

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
      <>
        <form onSubmit={handleSubmit}>
          <p>Nyitvatartás</p>
          <p>*formátum: 8.00 - 16.30</p>
            <select name="day" value={formData.day} onChange={handleInputChange}>
              <option value="monday">Hétfő</option>
              <option value="tuesday">Kedd</option>
              <option value="wednesday">Szerda</option>
              <option value="thursday">Csütörtök</option>
              <option value="friday">Péntek</option>
              <option value="saturday">Szombat</option>
              <option value="sunday">Vasárnap</option>
            </select>
            <input type="number" value={formData.open} name="open" onChange={handleInputChange} className="w-16"/>
            <span> - </span>
            <input type="number" value={formData.close} name="close" onChange={handleInputChange} className="w-16"/>
            <label onClick={toggleRadio}>
              Zárva
              <input type="radio" checked={isChecked} />
            </label>
            <br />
          <button className="btn" type="submit">Mentés</button>
        </form>
        <button className="btn" onClick={logOut}>Kijelentkezek</button>
        {succesMessage && <h1 className="p-2 text-xl bg-lime-100 border-2 border-lime-500 rounded-xl">Mentés sikeres</h1>}
        {errorMessage && <h1 className="p-2 text-xl bg-red-100 border-2 border-red-500 rounded-xl">Valami nem sikerült Kutya!</h1>}
      </>
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
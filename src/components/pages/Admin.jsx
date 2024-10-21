import { useEffect, useState } from "react"
import loginService from '../../services/login'
import { useDispatch } from 'react-redux'
import { initializeVacationData } from "../../app/vacationsSlice"
import ErrorMessage from "../ErrorMessage"
import { setErrorMessage } from "../../app/messageSlice"
import SuccessMessage from "../SuccessMessage"
import AdminForm_openings from "../AdminForm_openings"
import AdminForm_vacation from "../AdminForm_vacation"
import AdminForm_promotion from "../AdminForm_promotion"

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [passText, setPassText] = useState('')
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeVacationData())
  }, [dispatch])
  
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

  const logOut = () =>{
    setIsLoggedIn(false)
    setPassText('')
  }

  if(!isLoggedIn) {
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

return (
  <div className="flex flex-col justify-center gap-6">

    <div className="flex flex-col items-center ">
      <AdminForm_openings logOut={logOut} />
      <ErrorMessage />
      <SuccessMessage />
    </div>

    
    <div className="flex flex-col items-center">
      <AdminForm_vacation logOut={logOut}/>
    </div>

    <div className="flex flex-col items-center">
      <AdminForm_promotion logOut={logOut}/>
    </div>

  </div>
)
} 

export default Admin
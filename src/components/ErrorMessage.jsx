import React from 'react'
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  return (
    <div className='text-red-600 text-center font-bold'>Hiba történt a mentés során</div>
  )
}

export default ErrorMessage
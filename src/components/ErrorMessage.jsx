import React from 'react'
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const message = useSelector(state => state.message.errorMessageText)
  return (
    <div className='text-red-600 text-center font-bold'>{message}</div>
  )
}

export default ErrorMessage
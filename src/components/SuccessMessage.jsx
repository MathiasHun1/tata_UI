import React from 'react'
import { useSelector } from 'react-redux';

const SuccessMessage = () => {
    const message = useSelector(state => state.message.successMessageText)

    return (
        <div className='text-green-600 text-center font-bold'>{message}</div>
    )
}

export default SuccessMessage
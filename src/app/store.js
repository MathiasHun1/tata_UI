import { configureStore } from '@reduxjs/toolkit'
import openingsReducer from './openingsSlice'
import vacationsReducer from './vacationsSlice'
import messageReducer from './messageSlice'

export const store = configureStore({
    reducer: {
        openingDays: openingsReducer,
        vacation: vacationsReducer,
        message: messageReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'
import openingsReducer from './openingsSlice'
import vacationsReducer from './vacationsSlice'

export const store = configureStore({
    reducer: {
        openingDays: openingsReducer,
        vacation: vacationsReducer
    }
})
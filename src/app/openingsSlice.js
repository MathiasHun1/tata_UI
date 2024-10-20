import { createSlice } from "@reduxjs/toolkit";
import openingsService from "../services/openings";
import { setErrorMessage } from "./messageSlice";

export const openingsSlice = createSlice({
    name: 'openings',
    initialState: null,
    reducers: {
        setAll(state, action) {
           return [...action.payload]
        },
        update(state, action) {
            const updatedDay = action.payload
            return state.map(d => d.day === updatedDay.day 
                ? updatedDay
                : d
            )
        }
    }
})

export const { setAll, update } = openingsSlice.actions

export const initializeOpeningDays = () => async (dispatch) => {
    try {
        const openingDays = await openingsService.getAllDays()
        dispatch(setAll(openingDays))
    } catch (err) {
        // console.log(err)
    }
}

export const updateDay = (credentials) => async (dispatch) => {
    try {
        const result = await openingsService.updateDay(credentials)
        dispatch(update(result))
    } catch (error) {
        dispatch(setErrorMessage('Valamit rosszul írtál Kutya'))
        setTimeout(() => {
            dispatch(setErrorMessage(''))
        }, 3000)
    }
}

export default openingsSlice.reducer
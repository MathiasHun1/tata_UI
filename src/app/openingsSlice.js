import { createSlice } from "@reduxjs/toolkit";
import openingsService from "../services/openings";

export const openingsSlice = createSlice({
    name: 'openings',
    initialState: null,
    reducers: {
        setAll(state, action) {
           return [...action.payload]
        }
    }
})

export const { setAll } = openingsSlice.actions

export const initializeOpeningDays = () => async (dispatch) => {
    try {
        const openingDays = await openingsService.getAllDays()
        dispatch(setAll(openingDays))
    } catch (err) {
        console.log(err)
    }

}

export default openingsSlice.reducer
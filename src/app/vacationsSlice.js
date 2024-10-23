import { createSlice } from "@reduxjs/toolkit";
import vacationsService from '../services/vacation'

export const vacationsSlice = createSlice({
    name: 'vacation',
    initialState: {
        onVacation: false,
        text: ''
    },
    reducers: {
        initialize(state, action) {
            return action.payload
        },
        setText(state, action) {
            state.text = action.payload.text
        }
    }
})

export const { setText, initialize } = vacationsSlice.actions

export const initializeVacationData = () => async (dispatch) => {
    try {
        const result = await vacationsService.getVacationsData()
        dispatch(initialize(result))
    } catch (error) {
        console.log(error.message)
    }
}

export const saveVacationData = (credentials) => async (dispatch) => {
    try {
        const updatedData = await vacationsService.updateVacations(credentials)
        dispatch(setText(updatedData))
        return Promise.resolve()
    } catch (error) {
        throw error
    }
}

export default vacationsSlice.reducer
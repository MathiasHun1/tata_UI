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
        turnOn(state, action) {
            state.onVacation = true
        },
        turnOff(state, action) {
            state.onVacation = false
        },
        toggleVacationState(state, action) {
            state.onVacation = !state.onVacation
        },
        setText(state, action) {
            state.text = action.payload
        }
    }
})

export const { turnOn, turnOff, toggleVacationState, setText, initialize } = vacationsSlice.actions

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
        dispatch(initialize(updatedData))
    } catch (error) {
        console.log(error)
    }
}

export default vacationsSlice.reducer
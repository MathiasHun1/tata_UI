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
        switchVacation(state, action) {
            state.onVacation = !state.onVacation
        },
        setText(state, action) {
            state.text = action.payload
        }
    }
})

export const { turnOn, turnOff, switchVacation, setText, initialize } = vacationsSlice.actions

export const initializeVacationData = () => async (dispatch) => {
    try {
        const result = await vacationsService.getVacationsData()
        dispatch(initialize(result))
    } catch (error) {
        console.log(error.message)
    }
}

export default vacationsSlice.reducer
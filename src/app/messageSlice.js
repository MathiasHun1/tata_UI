import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        errorMessageText: '',
        successMessageText: ''
    },
    reducers: {
        setErrorMessage(state, action) {
            state.errorMessageText = action.payload
        },
        setSuccessMessage(state, action) {
            state.successMessageText = action.payload
        }
    }
})

export const { setErrorMessage, setSuccessMessage } = messageSlice.actions

export default messageSlice.reducer
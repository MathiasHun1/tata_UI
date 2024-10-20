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
        }
    }
})

export const { setErrorMessage } = messageSlice.actions

export default messageSlice.reducer
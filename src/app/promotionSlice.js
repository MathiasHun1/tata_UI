import { createSlice } from '@reduxjs/toolkit'
import promotionService from '../services/promotion'
import { showThenHideSuccessMessage } from './messageSlice'

export const promotionSlice = createSlice({
    name: 'promotion',
    initialState: {
        onPromotion: false,
        text: ''
    },
    reducers: {
        setPromo(state, action) {
            return action.payload
        },
        savePromo(state, action) {
            state.text = action.payload.text
        }
    }
})

export const { setPromo, savePromo } = promotionSlice.actions

export const initializePromotions = () => async (dispatch) => {
    try {
        const result = await promotionService.get()
        dispatch(setPromo(result))
    } catch (error) {
        console.log(error);
    }
}

export const saveNewPromotion = (credentials) => async (dispatch) => {
    try {
        const result = await promotionService.set(credentials)
        dispatch(savePromo(result))
        return Promise.resolve()
    } catch (error) {
        throw error
    }
}

export default promotionSlice.reducer


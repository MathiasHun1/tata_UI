import { createSlice } from '@reduxjs/toolkit'
import promotionService from '../services/promotion'

export const promotionSlice = createSlice({
    name: 'promotion',
    initialState: {
        onPromotion: false,
        text: ''
    },
    reducers: {
        setPromo(state, action) {
            return action.payload
        }
    }
})

export const { setPromo } = promotionSlice.actions

export const initializePromotions = () => async (dispatch) => {
    try {
        const result = await promotionService.get()
        dispatch(setPromo(result))
    } catch (error) {
        console.log(error)
    }
}

export const saveNewPromotion = (credentials) => async (dispatch) => {
    try {
        const result = await promotionService.set(credentials)
        dispatch(setPromo(result))
    } catch (error) {
        
    }
}

export default promotionSlice.reducer


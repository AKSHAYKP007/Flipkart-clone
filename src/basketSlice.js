import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) =>{
       state.items = [...state.items, action.payload]
    },
    deleteFromBasket: (state,action) =>{

    }
  },
})


export const { addToBasket,deleteFromBasket } = basketSlice.actions

export default basketSlice.reducer
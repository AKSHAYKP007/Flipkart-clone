import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [ ],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) =>{
       state.items = [...state.items, action.payload]
    },
    deleteFromBasket: (state,action) =>{
       const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id )
       let newBasket = [...state.items]
       newBasket.splice(index,1)
       state.items = newBasket
    },
    
    /*incrementTotalItems : (state,action) =>{
      const {title,total} = action.payload
      
      const index = state.items.findIndex(basketItem => basketItem.title === title )
      console.log(index)
      let newBasket = [...state.items]
      
      newBasket[index].total = total+1
      console.log(newBasket)
      state.items = newBasket
    }*/
  },
})


export const { addToBasket,deleteFromBasket,incrementTotalItems } = basketSlice.actions

export default basketSlice.reducer
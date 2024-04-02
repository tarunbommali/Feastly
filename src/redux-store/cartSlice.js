import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // dispatch Action 
    addItem: (state, action) => {
        // mutating the state here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions ; 

export default cartSlice.reducer;

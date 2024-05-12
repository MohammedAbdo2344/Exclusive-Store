import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            console.log(state.cart)
            state.total = state.cart.reduce((sum, item) => sum + item?.price * item?.quantity, 0)
        },
        removeFromCart: (state, action) => {
            state.cart.pop(action.payload);
            state.total = state.cart.reduce((sum, item) => sum + item?.price * item?.quantity, 0)
        },
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
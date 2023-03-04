import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["apple","banana"],
    },
    reducers: {
        addItem: (state) => {
            console.log("in a addItem reducer");
            state.items.push("peru");
        },
        removeItem: () => {
            console.log("in a removeItem reducer");
        },
        clearCart: () => {
            console.log("clearCart");    
        }
    }
});

export const {addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
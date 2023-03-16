import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            let itemExist = false;


              // check if item is already in the cart 
              state.items.forEach((item)=> {

                if(item.id === action.payload.id) {
                    // if item is there increase quantity of item
                        itemExist = true;
                        item.quantity++;
                }
              });

                // if item doesn't exist then add to cart
              if( !itemExist ) {
                  state.items.push({quantity:1,...action.payload});
                }


        },
        removeItem: () => {
            console.log("in a removeItem reducer");
        },
        clearCart: (state) => {
            console.log("clearCart");    
             state.items = []   
        }
    }
});

export const {addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
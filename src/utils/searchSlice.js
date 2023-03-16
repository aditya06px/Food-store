import { createSlice } from "@reduxjs/toolkit";
import filterData from "../filterData";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        filteredRestaurants: []
    },
    reducers: {
        searchHotel: (state,action) => {
            const data = filterData(action.payload.searchText, action.payload.allRestaurants);
            state.filteredRestaurants = data;
        },

        setfilteredRestaurantsFirstTime: (state,action) => {
            state.filteredRestaurants = action.payload;
        }      
    }
});

export const {searchHotel, setfilteredRestaurantsFirstTime } = searchSlice.actions;
export default searchSlice.reducer;
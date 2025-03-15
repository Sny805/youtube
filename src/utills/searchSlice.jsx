import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        casheState: {},
        searchSate: []
    },
    reducers: {
        casheResults: (state, action) => {
            state.casheState = { ...state.casheState, ...action.payload };
        },
        setSearchResults: (state, action) => {
            state.searchSate = action.payload;
        }
    }
});

export const { casheResults, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;

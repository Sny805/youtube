import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEOS_APIS, VIDEOS_APIS, GOOGLE_API_KEY } from "./constants";

/// Create slice for API call
export const fetchCategories = createAsyncThunk(
    "videos/fetchCategoryVideos",

    async (categoryId) => {
        const url = categoryId === 0 ? YOUTUBE_VIDEOS_APIS : `${VIDEOS_APIS}${categoryId}&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        return data.items

    }


)

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        categoriesVidoes: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = "laoding";
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesVidoes = action.payload
            }).addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message
            })
    }
})

export default videoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name: "app",
    initialState: {
        isOpenMenu: true,
    },

    reducers: {
        toggleMenu: (state) => {
            state.isOpenMenu = !state.isOpenMenu
        },
        closeSideBar: (state) => {
            state.isOpenMenu = false
        }
    }
})

export const { toggleMenu, closeSideBar } = appSlice.actions;

export default appSlice.reducer;
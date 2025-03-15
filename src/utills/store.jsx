import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./ChatSlice";
import videoReducer from "./videoSlice";


const appStore = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        chat: chatReducer,
        videos: videoReducer
    }
})

export default appStore;
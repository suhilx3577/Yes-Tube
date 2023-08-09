import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "./containerSlice";

const store = configureStore({
    reducer : {
        container : containerSlice,
    }
})

export default store;
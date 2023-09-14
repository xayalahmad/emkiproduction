import { configureStore } from "@reduxjs/toolkit";
import language from "./language";

const store = configureStore({
    reducer: {
        language
    }
})

export default store
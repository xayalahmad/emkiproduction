import { configureStore } from "@reduxjs/toolkit";
import language from "./language";
import mood from "./mood";
import page from "./page";

const store = configureStore({
    reducer: {
        language,
        mood,
        page
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import language from "./language";
import mood from "./mood";
import page from "./page";
import selectedBlog from "./selectedBlog";
const store = configureStore({
    reducer: {
        language,
        mood,
        page,
        selectedBlog
    }
})

export default store
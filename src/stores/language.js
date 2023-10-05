import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 5
}

const language = createSlice({
    name: 'languageStore',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { setLanguage } = language.actions
export default language.reducer
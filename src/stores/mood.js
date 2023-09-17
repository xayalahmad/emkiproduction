import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mood: ''
}

const mood = createSlice({
    name: 'moodStore',
    initialState,
    reducers: {
        setMood: (state, action) => {
            state.mood = action.payload
        }
    }
})

export const { setMood } = mood.actions
export default mood.reducer
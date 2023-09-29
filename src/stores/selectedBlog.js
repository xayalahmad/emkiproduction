import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBlog: ''
}

const selectedBlog = createSlice({
    name: 'selectedBlogStore',
    initialState,
    reducers: {
        setSelectedBlog: (state, action) => {
            state.selectedBlog = action.payload
        }
    }
})

export const { setSelectedBlog } = selectedBlog.actions
export default selectedBlog.reducer
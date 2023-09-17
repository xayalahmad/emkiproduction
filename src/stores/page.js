import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: ''
}

const page = createSlice({
    name: 'pageStore',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { setPage } = page.actions
export default page.reducer
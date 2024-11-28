import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: {
        loading: false,
        error: null,
        event: [],
    },
    reducers: {
        getAllEventStart: (state, action) => {
            state.loading = false;
            state.event = action.payload
        },
        GetAllEvents: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        
    }
})
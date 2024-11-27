import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = true;
            state.user = action.payload;
            state.isLoggedIn = true
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});


export const {
    loginStart,
    loginFailure,
    loginSuccess,
    logout
} = authSlice.actions

export default authSlice.reducer
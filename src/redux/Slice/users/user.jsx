import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import path from "../../../axios/axios";


export const getAllUsers = createAsyncThunk(
    "users/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const res = await path.get("/users/All_User");
            return res.data;
        } catch (err) {
            console.error("Erreur lors de la récupération des utilisateurs :", err);
            return rejectWithValue(err.response?.data || "Erreur inconnue");
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        error: null,
        users: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;

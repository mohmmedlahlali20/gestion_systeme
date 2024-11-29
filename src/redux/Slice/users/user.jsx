import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const GetAllUsers = createAsyncThunk(
    "getAllUsers",
    async(_,{isRejectedWithValue}) => {
        try {
            const res = await path.get("/users/All_User")
            return res.data
            
        } catch (err) {
            console.error("Error fetching events:", err);
            return rejectWithValue("Failed to fetch events");
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState:{
        loading:false,
        error:null,
        users:[]
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
         .addCase(GetAllUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(GetAllUsers.fulfilled, (state, action) => {
            state.loading = TbFlagSearch;
            state.events = action.payload;
         })
         .addCase(GetAllUsers.rejected, (state, action) => {
            state.loading = flase;
            state.error = action.payload;
         })
    }



})




export default userSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import path from "../../../axios/axios";
import Swal from "sweetalert2";

export const fetchAllEvents = createAsyncThunk(
  "fetchAllEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await path.get("/event/getAllEvent");
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      return rejectWithValue("Failed to fetch events");
    }
  }
);

export const createEvent = createAsyncThunk(
  "createEvent",
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await path.post("/event/create", eventData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Événement ajouté avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Échec de la création de l'événement",
        showConfirmButton: true,
      });
      console.error("Error creating event:", error);
      return rejectWithValue("Failed to create event");
    }
  }
);


const eventSlice = createSlice({
  name: "event",
  initialState: {
    loading: false,
    error: null,
    events: [],
  },
  reducers: {
    createEvent: (state, action) => {
      state.events.push(action.payload);
    },
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload; 
      })
      .addCase(fetchAllEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events.push(action.payload); 
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventSlice.reducer;

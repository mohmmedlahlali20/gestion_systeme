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

export const updateEvent = createAsyncThunk(
  "updateEvent",
  async ({ eventId, updateEventData }, { rejectWithValue }) => {
    try {
      const response = await path.patch(`/event/${eventId}`, updateEventData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Événement mis à jour avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Échec de la mise à jour de l'événement",
        showConfirmButton: true,
      });
      console.error("Error updating event:", error);
      return rejectWithValue("Failed to update event");
    }
  }
);

export const addUserToEvent = createAsyncThunk(
  "event/addUserToEvent",
  async ({ eventId, usersData }, { rejectWithValue }) => {
    try {
      const response = await path.post("/event/add_user", {
        eventId,
        userIds: usersData,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Utilisateur ajouté à l'événement avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      return { eventId, user: response.data };
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Échec de l'ajout de l'utilisateur",
        showConfirmButton: true,
      });
      console.error("Error adding user to event:", error);
      return rejectWithValue("Failed to add user to event");
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
    addUserInEvent: (state, action) => {
      const { eventId, user } = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      if (event) {
        event.users = [...(event.users || []), user];
      }
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
      })
      
      .addCase(addUserToEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserToEvent.fulfilled, (state, action) => {
        state.loading = false;
        const { eventId, user } = action.payload;
        const event = state.events.find((e) => e.id === eventId);
        if (event) {
          event.users = [...(event.users || []), user];
        }
      })
      .addCase(addUserToEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.loading = false;
        const updatedEvent = action.payload;
        const index = state.events.findIndex((event) => event.id === updatedEvent.id);
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { createEvent: createEventAction, addUserInEvent } = eventSlice.actions;

export default eventSlice.reducer;

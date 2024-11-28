import { createSlice } from "@reduxjs/toolkit";
import path from "../../../axios/axios";

export const fetchAllEvents = () => async (dispatch) => {
    try {
      dispatch(GetAllEvents()); 
      const response = await path.get('/event/getAllEvent'); 
      console.log(response.data);
      
      dispatch(getAllEventStart(response.data));
    } catch (error) {
      dispatch(getAllEventStart([]));
      console.error('Error fetching events:', error);
    }
  };

  const eventSlice = createSlice({
    name: "event",
    initialState: {
      loading: false,
      error: null,
      events: [],
    },
    reducers: {
      getAllEventStart: (state, action) => {
        state.loading = false;
        state.events = action.payload;
      },
      GetAllEvents: (state) => {
        state.loading = true;
        state.error = null;
      },
    },
  });
  
  export const { getAllEventStart, GetAllEvents } = eventSlice.actions;
  
  export default eventSlice.reducer;
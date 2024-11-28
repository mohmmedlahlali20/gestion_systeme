import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../Slice/auth/auth'
import eventReducer from '../Slice/event/event'


const store = configureStore ({
    reducer: {
        auth: authReducer,
        event: eventReducer,
      
    }
});



export default store
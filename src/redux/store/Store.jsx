import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../Slice/auth/auth'
import eventReducer from '../Slice/event/event'
import userReducer from '../Slice/users/user'


const store = configureStore ({
    reducer: {
        auth: authReducer,
        event: eventReducer,
        users: userReducer,
      
    }
});



export default store
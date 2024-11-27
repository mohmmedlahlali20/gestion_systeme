import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Slice/auth/login'


const store = configureStore ({
    reducer: {
        auth: authReducer,
    }
});



export default store
import { configureStore } from "@reduxjs/toolkit";

import loginReducer from '../Slice/auth/login';
import registerReducer from '../Slice/auth/register';

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
    },
});

export default store;

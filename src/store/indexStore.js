import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    // reducer: counterSlice.reducer //with 1 slice
    reducer: {
        counter: counterReducer, 
        auth: authReducer
    }
});

export default store;

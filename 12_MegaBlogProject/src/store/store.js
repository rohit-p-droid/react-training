import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducer/authSlice';

const store = configureStore({
    reducer: {
        authReducer,
    }
});

export default store;
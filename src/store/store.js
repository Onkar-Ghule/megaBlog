import { configureStore } from '@reduxjs/toolkit';
import authsliceReducer from './authSlice'

const store = configureStore({
  reducer:{
        auth:authsliceReducer
  }
});

export default store;
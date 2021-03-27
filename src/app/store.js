import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

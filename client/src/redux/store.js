import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';


// переробити стор у проекті на тулкіт

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;

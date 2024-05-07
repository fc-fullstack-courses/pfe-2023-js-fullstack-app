import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';


// переробити стор у проекті на тулкіт

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  }
});

export default store;

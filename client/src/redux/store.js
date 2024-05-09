import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import chatsReducer from './slices/chatsSlice';
import currentChatReducer from './slices/currentChatSlice';


// переробити стор у проекті на тулкіт

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
    chats: chatsReducer,
    currentChat: currentChatReducer
  }
});

export default store;

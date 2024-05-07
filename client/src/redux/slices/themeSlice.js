import { createSlice } from '@reduxjs/toolkit';
import CONSTANTS from '../../constants';

const initialState = {
  currentTheme: CONSTANTS.THEMES.DARK_THEME,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

const { actions, reducer: themeReducer } = themeSlice;

export const { changeTheme } = actions;

export default themeReducer;
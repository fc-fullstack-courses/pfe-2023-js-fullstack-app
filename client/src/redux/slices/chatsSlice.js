import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'chats';

const getAllChats = createAsyncThunk(
  `${SLICE_NAME}/getAllChats`,
  async function (userId, thunkAPI) {
    try {
      const {
        data: { data: chats },
      } = await API.getChats(userId);

      console.log(chats);

      return chats;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  }
);

const initialState = {
  chats: [],
  isLoading: false,
  error: null,
};

const chatsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllChats.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getAllChats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chats = action.payload;
    });

    builder.addCase(getAllChats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: chatsReducer } = chatsSlice;

export { getAllChats };
export default chatsReducer;

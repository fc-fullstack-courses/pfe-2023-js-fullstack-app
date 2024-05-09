import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'currentChat';

const getCurrentChat = createAsyncThunk(
  `${SLICE_NAME}/getCurrentChat`,
  async function (userId, thunkAPI) {
    try {
      const {
        data: { data: chat },
      } = await API.getChat(userId);

      return chat;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  }
);

const initialState = {
  chat: null,
  isLoading: false,
  error: null,
};

const currentChatSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrentChat.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getCurrentChat.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chat = action.payload;
    });

    builder.addCase(getCurrentChat.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: currentChatReducer } = currentChatSlice;

export { getCurrentChat };
export default currentChatReducer;

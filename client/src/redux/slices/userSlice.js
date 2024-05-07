import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

const SLICE_NAME = 'user';

//
const login = createAsyncThunk(
  // 1 агрумент - приставка перед згенерованими акшн-тайпами
  `${SLICE_NAME}/login`,
  // 2 аргумент - асинхронна функція
  async function (userLoginData, thunkAPI) {
    try {
      // console.log('userLoginData is: ');
      // console.log(userLoginData);

      const {
        data: {
          data: { user },
        },
      } = await API.login(userLoginData);

      // console.log(user);

      // console.log('thunkAPI is: ');
      // console.log(thunkAPI);

      return user;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.error.message);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  // у reducers ви пишите тількі редюсери які працюють виключно з синхронним кодом
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    // прописуємо реакції на певні екшени які не належать слайсу напряму

    // описуємо що відбувається при запиті
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { logout } = actions;
export { login };
export default userReducer;

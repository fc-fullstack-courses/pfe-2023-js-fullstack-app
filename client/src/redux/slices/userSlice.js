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

/*
  приблизний процес асинхронного запиту у редаксі: 
    1. надсилаємо екшен який свідчить про наше бажання виконати асинхрону операцію
    2. міддлвер коли бачить цей екшен запускає спеціальну функцію яка може містити побічні ефекти
      (запит на сервер)
    3. якщо спеціальна функція відпрацювала без помилок то можна діспачити 
        екшен успшного виконання з даними
    4. якщо спеціальна функція відпрацювала з помилками то можна діспачити 
        екшен провального виконання з помилкою
*/

const refresh = createAsyncThunk(
  // будуть сгенеровані тайпи :
  // user/refresh/pending
  // user/refresh/fullfilled
  // user/refresh/rejected
  `${SLICE_NAME}/refresh`,
  async function (refreshToken, thunkAPI) {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.refresh(refreshToken);

      // повертання чогось тут буде розцінене як наше бажання зробити
      // діспатч екшена успшного виконання
      return user; // user/refresh/fullfilled
    } catch (error) {
      // рефреш провалився
      return thunkAPI.rejectWithValue(error.response.data.error.message); // user/refresh/rejected
    }
  }
);

const registration = createAsyncThunk(
  `${SLICE_NAME}/registration`,
  async function (registrationData, thunkAPI) {
    try {
      const {
        data: {
          data: { user },
        },
      } = await API.registration(registrationData);

      return user;
    } catch (error) {
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

    builder.addCase(refresh.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // описуємо що відбувається при успіху запиту
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(refresh.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    // описуємо що відбувається при невдачі запиту
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { logout } = actions;
export { login, refresh, registration };
export default userReducer;

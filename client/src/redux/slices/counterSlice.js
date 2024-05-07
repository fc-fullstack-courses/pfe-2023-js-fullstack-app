import { createSlice } from '@reduxjs/toolkit';

/*
  Слайс - штматочок стану редаксу
  Створюється через функцію createSlicе. Вона приймає об'єкт налашувань
  в якому вказуються наступні властивості:
    1. name - приставка до назви слайсу (string)
    2. initialState 
    3. reducers - об'єкт з міні редюсерами на кожен кейс для слайса
*/

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // на основі ключа у об'єкті reducers та name
    // автоматично створюються екшн креатори
    increment: (state, action) => {
      // immer присутній можна "мутувати" стейт
      state.count += state.step;
    },
    decrement: (state) => {
      state.count -= state.step;
    },
    changeStep: (state, action) => {
      state.step = +action.payload;
    },
    reset: () => initialState,
  },
});

// reducer - готовий зібраний редюсер для слайсу
// actions - об'єкт в якому зберігаються усі екшн креатори
const { actions, reducer: counterReducer } = counterSlice;

// counter/increment
// counter/decrement
// counter/changeStep
// counter/reset

export const { increment, decrement, changeStep, reset } = actions;

export default counterReducer;

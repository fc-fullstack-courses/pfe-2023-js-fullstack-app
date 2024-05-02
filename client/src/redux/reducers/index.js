const initialState = {
  count: 0,
  step: 1,
};

// редюсер редаксу приймай початковий стан як значення за замовчанням для першого аргументу
function rootReducer(state = initialState, action) {
  // найчастіше в редюсерах використовують switch ... case
  switch (action.type) {
    case 'increment': {
      // формуємо новий стан та повертаємо його з редюсеру
      const newState = {
        ...state,
        count: state.count + state.step,
      };

      return newState;
    }
    case 'decrement': {
      return { ...state, count: state.count - state.step };
    }
    case 'changeStep': {
      return { ...state, step: Number(action.payload) };
    }
    // якщо action.type невідомий то стан не змінюємо
    default:
      return state;
  }
}

export default rootReducer;
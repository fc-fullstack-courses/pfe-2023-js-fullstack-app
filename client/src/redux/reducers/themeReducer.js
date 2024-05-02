import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../../constants';

const initialState = {
  currentTheme: CONSTANTS.THEMES.DARK_THEME,
};

// редюсер редаксу приймай початковий стан як значення за замовчанням для першого аргументу
function themeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_THEME: {
      return { ...state, currentTheme: action.payload };
    }
    // якщо action.type невідомий то стан не змінюємо
    default:
      return state;
  }
}

export default themeReducer;

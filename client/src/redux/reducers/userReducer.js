import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  // тут сидить логіка зміну стану
  // з редюсеру завжди повертається стан

  switch (action.type) {
    case ACTION_TYPES.USER_AUTH_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
        error: null,
      };

      return newState;
    }
    case ACTION_TYPES.USER_AUTH_SUCCESS: {
      const newState = {
        ...state,
        isLoading: false,
        user: action.payload,
      };

      return newState;
    }
    case ACTION_TYPES.USER_AUTH_ERROR: {
      const newState = {
        ...state,
        isLoading: false,
        error: action.payload,
      };

      return newState;
    }
    case ACTION_TYPES.LOGOUT: {
      const newState = {
        ...initialState,
      };

      return newState;
    }
    default:
      return state;
  }
}

export default userReducer;
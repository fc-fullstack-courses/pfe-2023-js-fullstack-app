// створили перелічення (enum) для типів екшенів
// щоб використовувати його як джерело істини
// для редюсерів та екшенів
const ACTION_TYPES = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  CHANGE_STEP: 'counter/changeStep',
  CHANGE_THEME: 'theme/changeTheme',
  USER_LOGIN_REQUEST: 'user/userLoginRequest',
  USER_REFRESH_REQUEST: 'user/userRefreshRequest',
  USER_AUTH_REQUEST: 'user/userRequest',
  USER_AUTH_SUCCESS: 'user/userSuccess',
  USER_AUTH_ERROR: 'user/userError',
  LOGOUT: 'logout'
}

export default ACTION_TYPES;
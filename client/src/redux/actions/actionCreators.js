import ACTION_TYPES from './actionTypes';

// actionCreators - спеціальні функції,
// які створюють екшени з корректною структурою

// function actionCreator () {

//   const action = { type: 'actionType'}

//   return action;
// }

// const action1 = actionCreator();

export const incrementCreator = () => ({ type: ACTION_TYPES.INCREMENT });

export const decrementCreator = () => ({ type: ACTION_TYPES.DECREMENT });

/**
 * @param {number} newStep new step value
 */
export const changeStepCreator = (newStep) => ({
  type: ACTION_TYPES.CHANGE_STEP,
  payload: newStep,
});

export const changeThemeCreator = (newTheme) => ({
  type: ACTION_TYPES.CHANGE_THEME,
  payload: newTheme
});

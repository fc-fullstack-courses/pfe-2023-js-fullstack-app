import { createAction } from "@reduxjs/toolkit";
// import ACTION_TYPES from './actionTypes';

// export const incrementCreator = () => ({ type: ACTION_TYPES.INCREMENT });

// export const decrementCreator = () => ({ type: ACTION_TYPES.DECREMENT });

// /**
//  * @param {number} newStep new step value
//  */
// export const changeStepCreator = (newStep) => ({
//   type: ACTION_TYPES.CHANGE_STEP,
//   payload: newStep,
// });

// створюємо екшн креатор, передаючи createAction на вхід екшн тип
export const increment = createAction('counter/increment');

export const decrement = createAction('counter/decrement');

export const changeStep = createAction('counter/changeStep');

// const act1 = increment();
// console.log(act1);

// // 1234 автоматично піде у властивість payload екшену
// const act2 = increment(1234);
// console.log(act2);

// з екшен креатора можна також одразу дістати екшн тип
// console.log(`increment action cretor type property value: ${increment.type}`);

// console.log(`increment action cretor toString method value: ${increment.toString()}`);
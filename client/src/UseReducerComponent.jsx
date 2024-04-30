import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  step: 1
}

const typicalAction = {
  // тип події, використовується редюсером для визначення логіки зміни стану
  type: 'increment',
  // додаткові дані для певних екшенів
  // step: 5
  payload: 5
}

/*
  Схема роботи useReducer:
    1. Відмальовуємо компонент з початкового стану
    2. Коли ми хочеми змінити стан то ми відправляємо екшн функцією dispatch
    3. Після запуску dispatch реакт запускає функцію reducer і передає їй поточний state
      та наш екшн
    4. reducer на основі action та state отримує нове значення стану і повертає його
    5. Те що reducer повернув реакт робить новим значенням стану

*/

function reducer (state, action) {
  // якась логіка обробки стану
  if (action.type === 'increment') {
    // формуємо новий стан
    const newState = {
      ...state,
      count: state.count + state.step
    }
    // повертаємо з редюсера нове значення стану
    return newState;
  } else if (action.type === 'setStep') {
    const newState = {
      ...state,
      step: action.payload
    }
    
    return newState;
  }

  // якщо редюсер не впізнав action то ми повернемо поочний стан
  return state;
}

const UseReducerComponent = (props) => {

  /*
    state - поточний стан у редюсері
    dispatch - функція яка приймає екша і ініціює зміну поточного стану

    reducer - чиста функція, приймає поточне значення стану і екшн 
              та на їх основі розраховує нове значення стану
    initialState - стартове значення стану
  */
  const [state, dispatch ] = useReducer(reducer, initialState);


  const handleIncrement = () => {
    // якщо хочемо змінити стан то маємо запустити dispatch і передати йому аргументом action
    const incrementAction = {
      type: 'increment'
    }

    dispatch(incrementAction);
  }

  return <div>
    <p>Current count is {state.count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button>Decrement</button>
  </div>;
};

export default UseReducerComponent;

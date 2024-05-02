import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './redux/actions/actionCreators';

const ReduxCounterComponent = (props) => {
  const { count, step, increment, decrement, changeStep } = props;

  return (
    <div>
      <p>Current count is {count}</p>
      <div>
        <label>
          <input type='number' value={step} onChange={({target: {value}}) => changeStep(value)} />
        </label>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// функція яка вказує яку частину редаксівсьокго стейту передвати в пропси компоненту
function mapStateToProps(state) {
  // об'єкт, який функція повертає буде заспреджено до пропсів
  return {
    count: state.count,
    step: state.step,
    // test: 'this is from mapStateToProps'
  };
}

// mapDispatchToProps

// Варіант 1: функція, яка приймає dispatch та повертає об'єкт з функціями
// які у комопнентімають діспачтити певні екшени. Ці функції додаються до пропсів
// function mapDispatchToProps(dispatch) {
//   // методи будуть додані до пропсів замість dispatch
//   return {
//     increment: () => dispatch(ActionCreators.incrementCreator()),
//     decrement: () => dispatch(ActionCreators.decrementCreator()),
//     changeStep: ({ target: { value } }) =>
//       dispatch(ActionCreators.changeStepCreator(value)),
//   };
// }

// Варіант 2 - об'єкт який містить у якості властивостей action creators
// до пропсів передадуть функції ідентичні по назвам і аргументам креаторам
// але які будуть одразу діспатчити правильний екшн
const mapDispatchToProps = {
  increment: ActionCreators.incrementCreator,
  decrement: ActionCreators.decrementCreator,
  changeStep: ActionCreators.changeStepCreator,
}

// function test(actionCreator) {

//   const dispatch = () => {};

//   return function (...args) {
//     dispatch(() => actionCreator(...args));
//   }
// }

// connect повертає HOC-функцію withProps
const withProps = connect(mapStateToProps, mapDispatchToProps);

const CounterWithReduxState = withProps(ReduxCounterComponent);

export default CounterWithReduxState;

import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from './redux/actions/actionCreators';

const ReduxCounterComponent = (props) => {
  const { count, step, dispatch } = props;

  const handleIncrement = () => {
    const incrementAction = ActionCreators.incrementCreator();

    dispatch(incrementAction);
  };

  const handleDecrement = () => dispatch(ActionCreators.decrementCreator());

  const handleChangeStep = ({ target: { value } }) =>
    dispatch(ActionCreators.changeStepCreator(value));

  return (
    <div>
      <p>Current count is {count}</p>
      <div>
        <label>
          <input type='number' value={step} onChange={handleChangeStep} />
        </label>
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
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

// connect повертає HOC-функцію withProps
const withProps = connect(mapStateToProps);

const CounterWithReduxState = withProps(ReduxCounterComponent);

export default CounterWithReduxState;

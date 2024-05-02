import React from 'react';
import { connect } from 'react-redux';

const ReduxCounterComponent = (props) => {
  const { count, step, dispatch } = props;

  const handleIncrement = () => {
    const incrementAction = {
      type: 'increment',
    };

    dispatch(incrementAction);
  };

  const handleDecrement = () => dispatch({ type: 'decrement' });

  const handleChangeStep = ({ target: { value } }) =>
    dispatch({ type: 'changeStep', payload: value });

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

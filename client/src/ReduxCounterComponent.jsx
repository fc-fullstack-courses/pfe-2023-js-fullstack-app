import React from 'react';
import { connect } from 'react-redux';

const ReduxCounterComponent = (props) => {
  const {count, dispatch} = props;

  const handleIncrement = () => {

    const incrementAction = {
      type: 'increment'
    }

    dispatch(incrementAction);
  }
  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

// функція яка вказує яку частину редаксівсьокго стейту передвати в пропси компоненту
function mapStateToProps (state) {
  // об'єкт, який функція повертає буде заспреджено до пропсів
  return {
    count: state.count,
    test: 'this is from mapStateToProps'
  }
}

// connect повертає HOC-функцію withProps
const withProps = connect(mapStateToProps);

const CounterWithReduxState = withProps(ReduxCounterComponent);

export default CounterWithReduxState;

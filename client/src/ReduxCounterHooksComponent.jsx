import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';
import * as ActionCreators from './redux/actions/actionCreators';
import styles from './ReduxCounterComponent.module.scss';
import CONSTANTS from './constants';

/*
  3 хуки react-redux:
    - useStore - отримує об'ект стори редакса
    - useDispatch - отримує функцію dispatch
    - useSelector - аналог mapStateToProps, підписує компонент
                    на зміни стану стори

*/

const { THEMES } = CONSTANTS;

const ReduxCounterHooksComponent = (props) => {
  // 1. отримання даних зі стори
  const theme = useSelector((state) => state.theme.currentTheme);

  const { count, step } = useSelector((state) => state.counter);

  // const { count, step, theme } = useSelector((state) => ({
  //   ...state.counter,
  //   theme: state.theme.currentTheme,
  // }));

  // 2. отримуємо dispatch
  const dispatch = useDispatch();

  // приймає об'єект mapDispatchToProps версії 2
  // першим аргументом і dispatch другим аргументом
  // повертає об'єкт в якому є всі функції з назвами з mapDispatchToProps
  // які вже діспатчать відповідні екшн креатори
  
  const { increment, decrement, changeStep } = bindActionCreators(
    {
      increment: ActionCreators.incrementCreator,
      decrement: ActionCreators.decrementCreator,
      changeStep: ActionCreators.changeStepCreator,
    },
    dispatch
  );

  const className = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK_THEME,
    [styles.lightTheme]: theme === THEMES.LIGHT_THEME,
  });

  return (
    <div className={className}>
      <p>Current count is {count}</p>
      <div>
        <label>
          <input
            type='number'
            value={step}
            onChange={({ target: { value } }) => changeStep(value)}
          />
        </label>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ReduxCounterHooksComponent;

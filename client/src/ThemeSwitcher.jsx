import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from './constants';
import { changeThemeCreator } from './redux/actions/actionCreators';

const { THEMES} = CONSTANTS;

const ThemeSwitcher = ({theme, changeTheme}) => {
  return (
    <div>
      <label>
        Current theme:
        <select value={theme} onChange={changeTheme}>
          <option value={THEMES.LIGHT_THEME}>Light theme</option>
          <option value={THEMES.DARK_THEME}>Dark theme</option>
        </select>
      </label>
    </div>
  );
};

const mStP = (state) => ({
  theme: state.currentTheme
});

const mDtp = dispatch => ({
  changeTheme: ({target: {value}}) => dispatch(changeThemeCreator(value))
});

export default connect(mStP, mDtp)(ThemeSwitcher);

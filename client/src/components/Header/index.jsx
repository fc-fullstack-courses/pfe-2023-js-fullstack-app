import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../api';
import { logout as logoutActionCreator } from '../../redux/actions/userActionCreators';
import styles from './Header.module.scss';

const Header = ({logoutAction, user, isLoading, error}) => {
  const handleLogout = () => {
    // видаляємо токен з локалСтораджу
    logout();

    // видаляємо користувача зі стейту
    logoutAction();
  };

  return (
    <header className={styles.container}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              exact
              to='/profile'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Profile
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            exact
            to='/users'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Active users
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              exact
              to='/chats'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Chats
            </NavLink>
          </li>
        )}
        {user ? (
          <li>
            <button className={styles.link} onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                exact
                to='/login'
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/registration'
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Registration
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

const mStP = (state) => state.user;

const mDtP = (dispatch) => ({
  logoutAction: () => dispatch(logoutActionCreator()),
});

export default connect(mStP, mDtP)(Header);

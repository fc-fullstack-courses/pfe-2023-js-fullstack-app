import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import UsersPage from './pages/Users';
import LoginPage from './pages/Login';
import { refresh } from './api';
import CONSTANTS from './constants';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import ChatsPage from './pages/Chats';
import * as UserActionCreators from './redux/actions/userActionCreators';

function App(props) {
  const {userRequest, userSuccess, userError} = props;
  // спроба виконання рефреш - запиту
  useEffect(() => {
    const token = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    // якщо токен існує то робимо запит на рефреш даних користувача
    if (token) {
      userRequest();

      refresh(token)
        .then((response) => {
          // отриманого користувача зберігаємо у стейт
          const userFromServer = response.data.data.user;

          userSuccess(userFromServer);
        })
        .catch((error) => {
          userError(error);
        });
    }
  }, []);

  return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute path='/profile' component={ProfilePage} />
        <PrivateRoute path='/chats' component={ChatsPage} />
        <PublicOnlyRoute path='/registration' component={RegistrationPage} />
        <PublicOnlyRoute path='/login' component={LoginPage} />
        <Route path='/users' component={UsersPage} />
      </Switch>
  );
}

// const mStP = (state) => {};

const mDtP = {
  ...UserActionCreators
}

// якщо потрібно вказати діспатч ту пропс але до стейту під'єднуватися не треба
export default connect(null, mDtP)(App);

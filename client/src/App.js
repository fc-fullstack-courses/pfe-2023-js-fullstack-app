import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import UsersPage from './pages/Users';
import LoginPage from './pages/Login';
import CONSTANTS from './constants';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import ChatsPage from './pages/Chats';
import { refresh } from './redux/slices/userSlice';

function App(props) {
  const dispatch = useDispatch();

  // спроба виконання рефреш - запиту
  useEffect(() => {
    const token = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    // якщо токен існує то робимо запит на рефреш даних користувача
    if (token) {
      dispatch(refresh(token));
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

export default App;

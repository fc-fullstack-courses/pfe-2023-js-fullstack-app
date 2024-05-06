import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { connect } from 'react-redux';

// Замінник Route для маршрутів на фронті
// які мають бути доступні тількі авторизованим користувачам
const PrivateRoute = ({ user, isLoading, error, ...props }) => {


  // якщо  дані користувача магаються отримати то можна про це споівстити користувача
  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  // якщо користувач є то ми перекидаємо його на сторінку на яку він йшов
  if (user) {
    return <Route {...props} />;
  }
  console.log(isLoading)
  console.log(user)
  console.log(error)
  // якщо даних користувача немає і ми не вантажимо їх то можна переенаправити гостя на головну
  return <Redirect to='/' />;
};

const mStp = state => state.user;

export default connect(mStp)(PrivateRoute);

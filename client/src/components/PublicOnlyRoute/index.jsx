import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


/*
  Опціональне ДЗ:
    Створити компонент PublicOnlyRoute який не дозволяє авторизовани користувачам
    переходити на певні сторінки на фронті (реєстрації, логін)
*/

const PublicOnlyRoute = ({ user, isLoading, error, ...props }) => {

  // якщо  дані користувача магаються отримати то можна про це споівстити користувача
  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  // якщо користувач є то ми перекидаємо його на головну сторінку 
  if (user) {
    return <Redirect to='/' />;
  }
  
  // якщо даних користувача немає і ми не вантажимо їх то показуємо сторінку на яку людина йшла
  return <Route {...props} />;
}

const mStp = state => state.user;

export default connect(mStp)(PublicOnlyRoute);
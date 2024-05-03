import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import cx from 'classnames';
import { login } from '../../api';
import { USER_LOGIN_SCHEMA } from '../../validation/userValidation';
import styles from './LoginForm.module.scss';
import * as UserActionCreators from '../../redux/actions/userActionCreators';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({
  isLoading,
  error,
  userRequest,
  userSuccess,
  userError,
}) => {
  const handleSubmit = async (values, formikBag) => {
    // запам'ятовуємо у стані що робимо запит на сервер
    userRequest();

    try {
      const {
        data: {
          data: { user },
        },
      } = await login(values);
      // при успішному запиту зберігаємо юзера

      userSuccess(user);
    } catch (error) {
      // при неуспішному запиту зберігаємо помилку
      userError(error);
    }

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_LOGIN_SCHEMA}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor='email' className={styles.label}>
            Email:
          </label>
          <Field
            type='email'
            name='email'
            id='email'
            className={styles.input}
          />
        </div>
        <ErrorMessage name='email' component='div' className={styles.error} />
        <div className={styles.inputContainer}>
          <label htmlFor='password' className={styles.label}>
            Password:
          </label>
          <Field
            type='password'
            name='password'
            id='password'
            className={styles.input}
          />
        </div>
        <ErrorMessage
          name='password'
          component='div'
          className={styles.error}
        />
        <div className={styles.btnContainer}>
          <button type='submit' className={styles.btn}>
            Login
          </button>
          <button type='reset' className={styles.btn}>
            Reset fields
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const mStP = (state) => state.user;

const mDtP = {
  ...UserActionCreators,
};

export default connect(mStP, mDtP)(LoginForm);

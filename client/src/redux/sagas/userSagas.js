import {put} from 'redux-saga/effects';
import * as API from '../../api';
import { userError, userSuccess } from '../actions/userActionCreators';

// саги, в яких ви напряму виконуєте асинхроні запити
// нахиваються воркер - сагами
export function* loginSaga(action) {
  // запити можуть завершитися помилками
  try {
    // тут можна спробувати зробити запит
    const axiosResponse = yield API.login(action.payload);

    const {
      data: {
        data: { user },
      },
    } = axiosResponse;

    // при успіху зберігаємо користувача у стору
    yield put(userSuccess(user));
  } catch (error) {
    // при невдачі діспатчімо у стор екшн з помилкою
    yield put(userError(error));
  }
}

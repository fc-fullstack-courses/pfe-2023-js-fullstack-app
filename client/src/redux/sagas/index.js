import { takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { loginSaga, refreshSaga } from './userSagas';

// Обов'язково генератор
// сага - функція генератор, яка певним чином використовується бібліотекою
// redux-saga
// rootSaga - аналог rootReducer - використовуується для того
// щоб вказати на які саме екшени яким чином треба реагувати
function* rootSaga() {
  // кажемо що ми будемо реагувати на кожен екшн з пеаним типом
  yield takeEvery(ACTION_TYPES.USER_LOGIN_REQUEST, loginSaga);
  yield takeEvery(ACTION_TYPES.USER_REFRESH_REQUEST, refreshSaga);
}

export default rootSaga;

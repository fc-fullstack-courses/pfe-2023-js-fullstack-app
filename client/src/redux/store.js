import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// створюємо міддлвер для бібліотеки redux-saga
const sagaMiddleware = createSagaMiddleware();

// тут ви кажете які саме міддлвери будуть до тсори під'єднані
const enhancer = applyMiddleware(sagaMiddleware);

// треба створити стору (сховище) для стану редакса
// стора вимагає щоб їй передали редюсер для глобального стану
const store = createStore(rootReducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

export default store;
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

// треба створити стору (сховище) для стану редакса
// стора вимагає щоб їй передали редюсер для глобального стану
const store = createStore(rootReducer, composeWithDevTools());

export default store;
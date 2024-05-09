import { io } from 'socket.io-client';

import CONSTANTS from '../constants';
import { newMessageError, newMessage } from '../redux/slices/currentChatSlice';
import store from '../redux/store';

// тут ми одразу отримуємо екземпляр з'єданння з сервером
const socket = io(CONSTANTS.SERVER_URL);

// відправка певної події а сервер сокетів
export const sendBtnClick = () => {
  // випромінюємо подію
  socket.emit(
    'buttonClick',
    {
      test: 'testing',
      isInteresting: true,
    },
    10,
    true,
    null
  );
};

export const addNewMessage = (messageData) => {
  socket.emit('newChatMessage', messageData);
};

// реагуємо на подію з серверу (не та сама що з клієнта)
socket.on('buttonClick', (message) => {
  alert(message);
});

socket.on('newMessage', ({ newMessage: newMessageObj, author }) => {
  const action = newMessage({ ...newMessageObj, author });
  store.dispatch(action);
});

socket.on('newMessageError', (error) => {
  const action = newMessageError(error.message);
  store.dispatch(action);
});

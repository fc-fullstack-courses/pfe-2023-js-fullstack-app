import { io } from 'socket.io-client';
import CONSTANTS from '../constants';

// тут ми одразу отримуємо екземпляр з'єданння з сервером
const socket = io(CONSTANTS.SERVER_URL);

// відправка певної події а сервер сокетів
export const sendBtnClick = () => {
  // випромінюємо подію
  socket.emit('buttonClick', {
    test: 'testing',
    isInteresting: true
  }, 10, true, null);
}

// реагуємо на подію з серверу (не та сама що з клієнта)
socket.on('buttonClick', (message) => {
  alert(message);
});

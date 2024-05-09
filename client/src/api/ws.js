import { io } from 'socket.io-client';
import CONSTANTS from '../constants';

// тут ми одразу отримуємо екземпляр з'єданння з сервером
const socket = io(CONSTANTS.SERVER_URL);


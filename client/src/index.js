import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
import App from './App';
import UseReducerComponent from './UseReducerComponent';
import ReduxCounterComponent from './ReduxCounterComponent';
import store from './redux/store';
import ThemeSwitcher from './ThemeSwitcher';
import ReduxCounterHooksComponent from './ReduxCounterHooksComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    {/* <ReduxCounterHooksComponent /> */}
    <ReduxCounterComponent />
    <ThemeSwitcher />
  </Provider>
);

/*
  Алгоритм роботи з чистим редаксом:
    1.  створюємо базовий редюсер для глобального стану
    2.  На основі редюсеру створюєте стору редаксу
    3.  під'єднуємо редакс до реакт додатку за допомогою бібілотеки react-redux 
        і компонента Provider надаєте можливість комопонентам отримувати дані з стори
    4.  У компоненті який має отримувати дані зі стори ви запускаєта функцію connect 
        бібілотеки react-redux та вказуєте яку частину стейту вам потрібно отримати через
        функцію mapStateToProps
    5.  connect повертає Компонент Вищого Порядку якому ви передаєте реактівський компонент
        і результат роботи HOC ви рендерите у реакті. Початковий реакт компонент отримає доступ
        до даних які ви передали у mapStateToProps
    6. В цьому компоненті у пропасх також буде dispatch яким можна буде міняти стейт
*/

/*
  Зробіть на редаксі компонент лічільника який може додавати 
  або віднімати значення кліків у стані
  * при додаванні та відніманні ви робити це не з 1 а з кроком
    крок трреба зберігати у стані редаксу та надати можлиівсть його змінювати також
    у вашому компоненті наприклад інпутом або селектом
*/

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';
import App from './components/App/App';

/* eslint import/extensions: off */
import 'src/styles/global.scss';

import {
  todoList,
  todoItem,
  todoText,
  cross,
  afterRow,
  filter as filterClass,
  addItem,
  noPadding,
  cleanUp
} from 'src/components/TodoList/TodoList.scss';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

const dispatch = store.dispatch;

const app = document.getElementById('app');
const header = document.createElement('h1');
const todoApp = document.createElement('div');

header.appendChild(document.createTextNode('Native Todo List'));

app.appendChild(header);
app.appendChild(todoApp);

const formList = () => `
  <ul>
    ${store.getState().list.reduce((html, item) => html.concat(`<li>${item.value}</li>`), '')}
  </ul>
`;

todoApp.innerHTML = formList();

setTimeout(() => {
  window.startTime = (new Date()).getTime();
  dispatch({type: 'ADD_TO_LIST', payload: {value: 'hello'}});
  todoApp.innerHTML = formList();
  console.log(`render: ${(new Date()).getTime() - window.startTime}ms`);
}, 3000);

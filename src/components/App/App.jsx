import React from 'react';
import DevTools from 'mobx-react-devtools';

import TodoStore from 'src/models/TodoStore';
import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

// For debugging only
const store = new TodoStore();
window.store = store;

const App = () => (
  <div className={app}>
    <h1>Todo List</h1>
    <TodoList store={store} />
    <DevTools />
  </div>
);

export default App;

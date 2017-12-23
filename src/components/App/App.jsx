import React from 'react';
import DevTools from 'mobx-react-devtools';
import { reaction } from 'mobx';

import TodoStore from 'src/models/TodoStore';
import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

const store = new TodoStore();

const savedStoreState = JSON.parse(localStorage.getItem('TodoStore'));
if (savedStoreState) store.replaceList(savedStoreState);

reaction(
    () => JSON.stringify(store.list.toJS()),
    data => localStorage.setItem('TodoStore', data)
);


const App = () => (
  <div className={app}>
    <h1>Todo List</h1>
    <TodoList store={store} />
    <DevTools />
  </div>
);

export default App;

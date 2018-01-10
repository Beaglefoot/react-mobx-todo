import React from 'react';

import TodoStore from 'src/models/TodoStoreMST';
import TodoItem from 'src/models/TodoItemMST';
import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

console.time('mst');
const items = new Array(50).fill().map((_, i) => TodoItem.create({ value: `no: ${i}` }));
const store = TodoStore.create({
  list: items
});
console.timeEnd('mst');

// const savedStoreState = JSON.parse(localStorage.getItem('TodoStore'));
// if (savedStoreState) store.replaceList(savedStoreState);
//
// reaction(
//     () => JSON.stringify(store.list.toJS()),
//     data => localStorage.setItem('TodoStore', data)
// );


const App = () => (
  <div className={app}>
    <h1>Todo List</h1>
    <TodoList store={store} />
  </div>
);

export default App;

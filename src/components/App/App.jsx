import React from 'react';
import DevTools from 'mobx-react-devtools';

import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

// MST
import TodoStoreMST from 'src/models/TodoStoreMST';
import TodoItemMST from 'src/models/TodoItemMST';

console.time('MST: generate items');
const itemsMST = new Array(5000).fill().map((_, i) => TodoItemMST.create({ value: `no: ${i}` }));
console.timeEnd('MST: generate items');

console.time('MST: create store');
const storeMST = TodoStoreMST.create({
  list: itemsMST
});
console.timeEnd('MST: create store');

// MobX
import TodoStore from 'src/models/TodoStore';
import TodoItem from 'src/models/TodoItem';

console.time('MobX: generate items');
const items = new Array(5000).fill().map((_, i) => new TodoItem({ value: `no: ${i}` }));
console.timeEnd('MobX: generate items');

console.time('MobX: create store');
const store = new TodoStore(items);
console.timeEnd('MobX: create store');



const App = () => (
  <div>
    <div className={app}>
      <div>
        <h1>MST Todo List</h1>
        <TodoList store={storeMST} />
      </div>
      <div>
        <h1>MobX Todo List</h1>
        <TodoList store={store} />
      </div>
    </div>
    <DevTools />
  </div>
);

export default App;

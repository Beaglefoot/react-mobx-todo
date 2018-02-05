import React from 'react';
import { observer } from 'mobx-react';

import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

console.log(new Date().toTimeString().split(' ')[0]);

// MST

// import TodoStoreMST from 'src/models/TodoStoreMST';
// import TodoItemMST from 'src/models/TodoItemMST';
//
// const itemsMST = new Array(100).fill().map((_, i) => TodoItemMST.create({ value: `no: ${i}` }));
//
// const storeMST = TodoStoreMST.create({
//   list: itemsMST
// });

// MobX
import TodoStore from 'src/models/TodoStore';
import TodoItem from 'src/models/TodoItem';

const items = new Array(1500)
  .fill()
  .map((_, i) => new TodoItem({ value: `no: ${i}` }));

const store = new TodoStore(items);
window.store = store;

setInterval(() => store.list[1].changeValue(Math.random().toString()), 12000);

const App = observer(() => (
  <div>
    <div className={app}>
      {/*<div>*/}
      {/*<h1>MST Todo List</h1>*/}
      {/*<TodoList store={storeMST} />*/}
      {/*</div>*/}
      <div>
        <h1>MobX Todo List</h1>
        <TodoList store={store} />
      </div>
    </div>
  </div>
));

export default App;

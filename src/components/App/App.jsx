import React from 'react';

import TodoList from 'src/components/TodoList/TodoList';
import { app } from './App.scss';

console.log((new Date).toTimeString().split(' ')[0]);

const App = () => (
  <div>
    <div className={app}>
      <div>
        <h1>Redux+Ramda Todo List</h1>
        <TodoList />
      </div>
    </div>
  </div>
);

export default App;

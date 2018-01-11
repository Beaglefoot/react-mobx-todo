import { createTodoItem } from 'src/redux/helpers';

const initialState = {
  list: new Array(100).fill().map((_, i) => createTodoItem({ value: `no: ${i}` })),
  filter: 'all' || 'finished' || 'unfinished'
};

export default initialState;

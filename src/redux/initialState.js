import { createTodoItem } from 'src/redux/helpers';

const initialState = {
  list: new Array(2000).fill().map((_, i) => createTodoItem({ value: `no: ${i}` })),
  filter: 'all' || 'finished' || 'unfinished'
};

export default initialState;

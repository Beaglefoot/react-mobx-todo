import cuid from 'cuid';

import { dispatch } from 'src';
import {
  toggleDone,
  changeValue
} from 'src/redux/actions';

export const createTodoItem = ({ value = '', done = false }) => ({
  value,
  done,
  id: cuid()
});

export const enhanceListItems = list => list.map((item, i) => ({
  ...item,
  toggleDone: () => dispatch(toggleDone(i)),
  changeValue: value => dispatch(changeValue(i, value))
}));

export const getFilteredList = state => {
  switch (state.filter) {
    case 'finished':
      return state.list.filter(item => item.done);
    case 'unfinished':
      return state.list.filter(item => !item.done);
    default:
      return state.list;
  }
};

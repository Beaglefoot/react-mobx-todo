import initialState from './initialState';

import {
  ADD_TO_LIST,
  CHANGE_FILTER,
  REMOVE_FROM_LIST,
  REMOVE_FINISHED_FROM_LIST,
  TOGGLE_DONE,
  CHANGE_VALUE
} from './actions';

import { createTodoItem } from './helpers';

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_TO_LIST:
      return { ...state, list: [createTodoItem(payload), ...state.list] };
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case REMOVE_FROM_LIST:
      return { ...state, list: [...state.list.slice(0, payload), ...state.list.slice(payload + 1)] };
    case REMOVE_FINISHED_FROM_LIST:
      return { ...state, list: state.list.filter(item => !item.done) };
    case TOGGLE_DONE:
      console.log('reducer toggleDone');
      return { ...state, list: [
        ...state.list.slice(0, payload),
        { ...state.list[payload], done: !state.list[payload].done },
        ...state.list.slice(payload + 1)
      ]};
    case CHANGE_VALUE:
      return {
        ...state,
        list: [
          ...state.list.slice(0, payload.index),
          { ...state.list[payload.index], value: payload.value },
          ...state.list.slice(payload.index + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
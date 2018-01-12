import * as R from 'ramda';

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
      // console.log(`reducer: ${(new Date()).getTime() - window.startTime}ms`);
      return R.evolve({ list: R.prepend(createTodoItem(payload)) }, state);
    case CHANGE_FILTER:
      return R.assoc('filter', payload, state);
    case REMOVE_FROM_LIST:
      return R.evolve({ list: R.remove(payload, 1) }, state);
    case REMOVE_FINISHED_FROM_LIST:
      return R.evolve({ list: R.filter(item => !item.done) });
    case TOGGLE_DONE:
      return R.over(R.lensPath(['list', payload, 'done']), R.not, state);
    case CHANGE_VALUE:
      return R.assocPath(['list', payload.index, 'value'], payload.value, state);
    default:
      return state;
  }
};

export default reducer;
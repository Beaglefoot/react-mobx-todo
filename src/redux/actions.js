export const ADD_TO_LIST = 'ADD_TO_LIST';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const REMOVE_FINISHED_FROM_LIST = 'REMOVE_FINISHED_FROM_LIST';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const addToList = (item = '') => ({ type: ADD_TO_LIST, payload: { value: item } });
export const changeFilter = (value = '') => ({ type: CHANGE_FILTER, payload: value });
export const removeFromList = (index = 0) => ({ type: REMOVE_FROM_LIST, payload: index });
export const removeFinishedFromList = () => ({ type: REMOVE_FINISHED_FROM_LIST });
export const toggleDone = (index = 0) => ({ type: TOGGLE_DONE, payload: index });
export const changeValue = (index = 0, value = '') => ({ type: CHANGE_VALUE, payload: { index, value } });

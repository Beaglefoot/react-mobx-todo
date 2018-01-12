import cuid from 'cuid';

export const createTodoItem = ({ value = '', done = false }) => ({
  value,
  done,
  id: cuid()
});

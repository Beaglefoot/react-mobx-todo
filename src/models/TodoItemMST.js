import { types } from 'mobx-state-tree';
import cuid from 'cuid';

const TodoItem = types.model({
  value: types.string,
  done: false,
  id: types.optional(types.string, cuid)
}).actions(self => ({
  toggleDone() {
    self.done = !self.done;
  },

  changeValue(value) {
    self.value = value;
  }
}));

export default TodoItem;

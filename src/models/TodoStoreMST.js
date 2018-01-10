import { types } from 'mobx-state-tree';
import TodoItem from 'src/models/TodoItemMST';

const TodoStore = types.model({
  list: types.array(TodoItem),
  filter: types.optional(
    types.enumeration(['all', 'finished', 'unfinished']),
    () => 'all'
  )
}).views(self => ({
  get filteredList() {
    switch(self.filter) {
      case 'finished':
        return self.list.filter(item => item.done);
      case 'unfinished':
        return self.list.filter(item => !item.done);
      default:
        return self.list;
    }
  }
})).actions(self => ({
  replaceList(list) {
    self.list = list.map(item => TodoItem.create(item));
  },

  addToList(value) {
    self.list.unshift(TodoItem.create({ value }));
  },

  changeFilter(value) {
    self.filter = value;
  },

  removeFromList(index) {
    self.list.splice(index, 1);
  },

  removeFinishedFromList() {
    self.list = self.list.filter(item => !item.done);
  }
}));

export default TodoStore;

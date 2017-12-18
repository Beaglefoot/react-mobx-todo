import { observable, action, computed } from 'mobx';
import TodoItem from 'src/components/TodoList/TodoItem';

class TodoStore {
  @observable list = [];
  @observable filter;

  constructor() {
    this.list = [
      new TodoItem('cook something'),
      new TodoItem('replace bulb')
    ];

    this.filter = 'all';
    this.removeFromList = this.removeFromList.bind(this);
    this.removeFinishedFromList = this.removeFinishedFromList.bind(this);
  }

  @action addToList(value) {
    this.list.unshift(new TodoItem(value));
  }

  @action changeFilter(value) {
    this.filter = value;
  }

  @action removeFromList(index) {
    this.list.splice(index, 1);
  }

  @action removeFinishedFromList() {
    this.list = this.list.filter(item => !item.done);
  }

  @computed get filteredList() {
    switch(this.filter) {
    case 'finished':
      return this.list.filter(item => item.done);
    case 'unfinished':
      return this.list.filter(item => !item.done);
    default:
      return this.list;
    }
  }
}

export default TodoStore;

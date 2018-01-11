import { observable, action, computed } from 'mobx';
import TodoItem from 'src/models/TodoItem';

class TodoStore {
  @observable list = [];
  @observable filter;

  constructor(items) {
    this.list = items;

    this.filter = 'all';
    this.removeFromList = this.removeFromList.bind(this);
    this.removeFinishedFromList = this.removeFinishedFromList.bind(this);
  }

  @action replaceList(list) {
    this.list = list.map(item => new TodoItem(item));
  }

  @action addToList(value) {
    this.list.unshift(new TodoItem({ value }));
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

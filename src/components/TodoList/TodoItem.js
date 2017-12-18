import { observable, action } from 'mobx';
import cuid from 'cuid';

class TodoItem {
  @observable value;
  @observable done;

  constructor(value) {
    this.value = value;
    this.id = cuid();
    this.done = false;

    this.toggleDone = this.toggleDone.bind(this);
  }

  @action toggleDone() {
    this.done = !this.done;
  }
}

export default TodoItem;

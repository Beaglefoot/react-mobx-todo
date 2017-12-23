import { observable, action } from 'mobx';
import cuid from 'cuid';

class TodoItem {
  @observable value;
  @observable done;

  constructor({ value = '', id = cuid(), done = false }) {
    Object.assign(this, { value, id, done });

    this.toggleDone = this.toggleDone.bind(this);
  }

  @action toggleDone() {
    this.done = !this.done;
  }
}

export default TodoItem;

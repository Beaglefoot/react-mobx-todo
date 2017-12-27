import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import TodoText from 'src/components/TodoList/TodoText';

import {
  todoList,
  todoItem,
  cross,
  afterRow,
  filter as filterClass,
  addItem,
  noPadding,
  cleanUp
} from './TodoList.scss';

@observer
class TodoList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleFinishedRemoval = this.handleFinishedRemoval.bind(this);
  }

  handleChange(e) {
    // on Enter press
    if (e.charCode === 13) {
      console.time('add to list');
      this.props.store.addToList(e.target.value);
      console.timeEnd('add to list');
      e.target.value = '';
    }
  }

  handleFiltering(e) {
    console.time('change filter');
    this.props.store.changeFilter(e.target.textContent.toLowerCase());
    console.timeEnd('change filter');
  }

  handleFinishedRemoval() {
    console.time('remove finished');
    this.props.store.removeFinishedFromList();
    console.timeEnd('remove finished');
  }

  render() {
    const {
      filteredList,
      filter,
      removeFromList
    } = this.props.store;

    return (
      <div className={todoList}>
        <input className={addItem} type="text" onKeyPress={this.handleChange} placeholder="Add an item" />
        <ul className={noPadding}>
          {
            filteredList.map((item, index) => (
                <li key={item.id} className={todoItem}>
                  <TodoText {...item} toggleDone={item.toggleDone} changeValue={item.changeValue} />
                  <div className={cross} onClick={() => {
                    console.time('remove item');
                    removeFromList(index);
                    console.timeEnd('remove item');
                  }}>
                    &#10006;
                  </div>
                </li>
            ))
          }
        </ul>

        <div className={afterRow}>
          <div>Total: {filteredList.length}</div>
          <div className={classNames(cleanUp, 'fa', 'fa-trash-o')} onClick={this.handleFinishedRemoval} />
        </div>

        <ul className={classNames(filterClass, noPadding)} onClick={this.handleFiltering}>
          {
            ['All', 'Unfinished', 'Finished'].map((value, index) => (
              <li
                key={index}
                style={value.toLowerCase() === filter ? { color: 'inherit' } : {}}
              >
                {value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;

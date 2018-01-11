import React, { Component } from 'react';
// import { observer } from 'mobx-react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import TodoText from 'src/components/TodoList/TodoText';

import {
  todoList,
  todoItem,
  todoText,
  cross,
  afterRow,
  filter as filterClass,
  addItem,
  noPadding,
  cleanUp
} from './TodoList.scss';

import {
  addToList,
  changeFilter,
  removeFromList,
  removeFinishedFromList,
}  from 'src/redux/actions';

import { getFilteredList, enhanceListItems } from "src/redux/helpers";


// @observer
class TodoList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  handleChange(e) {
    // on Enter press
      if (e.charCode === 13) {
          const startTime = (new Date()).getTime();
          this.props.store.addToList(e.target.value);
          console.log((new Date()).getTime() - startTime);
          e.target.value = '';
      }
  }

  handleFiltering(e) {
    this.props.store.changeFilter(e.target.textContent.toLowerCase());
  }

  render() {
    const {
      filteredList,
      filter,
      removeFromList,
      removeFinishedFromList
    } = this.props.store;

    return (
      <div className={todoList}>
        <input className={addItem} type="text" onKeyPress={this.handleChange} placeholder="Add an item" />
        <ul className={noPadding}>
          {
            filteredList.map((item, index) => (
                <li key={item.id} className={todoItem}>
                  <TodoText {...item} toggleDone={item.toggleDone} changeValue={item.changeValue} />
                  <div className={cross} onClick={() => removeFromList(index)}>
                    &#10006;
                  </div>
                </li>
            ))
          }
        </ul>

        <div className={afterRow}>
          <div>Total: {filteredList.length}</div>
          <div className={classNames(cleanUp, 'fa', 'fa-trash-o')} onClick={removeFinishedFromList} />
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

// export default TodoList;

const mapStateToProps = state => ({
  store: {
    ...state,
    filteredList: getFilteredList({ ...state, list: enhanceListItems(state.list) })
  }
});

const mapDispatchToProps = {
  addToList,
  changeFilter,
  removeFromList,
  removeFinishedFromList,
};

const mergeProps = ({ store }, dispatchProps) => ({ store: { ...store, ...dispatchProps }});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as R from 'ramda';

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
  toggleDone,
  changeValue
} from 'src/redux/actions';

import { getFilteredList } from 'src/redux/selectors';

class TodoList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  handleChange(e) {
    // on Enter press
    if (e.charCode === 13) {
      window.startTime = (new Date()).getTime();
      this.props.addToList(e.target.value);
      console.log(`finish: ${(new Date()).getTime() - window.startTime}ms`);
      e.target.value = '';
    }
  }

  handleFiltering(e) {
    this.props.changeFilter(e.target.textContent.toLowerCase());
  }

  render() {
    const {
      filteredList,
      filter,
      removeFromList,
      removeFinishedFromList,
      toggleDone,
      changeValue
    } = this.props;

    return (
      <div className={todoList}>
        <input className={addItem} type="text" onKeyPress={this.handleChange} placeholder="Add an item" />
        <ul className={noPadding}>
          {
            filteredList.map((item, index) => (
              <li key={item.id} className={todoItem}>
                <TodoText {...item} toggleDone={toggleDone} changeValue={changeValue} index={index} />
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

const mapStateToProps = state => R.assoc('filteredList', getFilteredList(state), state);
// const mapStateToProps = state => ({ ...state, filteredList: state.list });

const mapDispatchToProps = {
  addToList,
  changeFilter,
  removeFromList,
  removeFinishedFromList,
  toggleDone,
  changeValue
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
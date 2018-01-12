import React from 'react';

import { todoItem, todoText, edit, todoEdit } from './TodoText.scss';

class TodoText extends React.Component {
  constructor() {
    super();

    this.state = { isEditing: false };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleEditFinish = this.handleEditFinish.bind(this);
    this.handleDoneToggling = this.handleDoneToggling.bind(this);
  }

  handleEditClick() {
    this.setState(currentState => ({ isEditing: !currentState.isEditing }));
  }

  handleEditing({ target: { value } }) {
    this.props.changeValue(this.props.index, value);
  }

  handleEditFinish(e) {
    if (e.which === 13 || e.which === 27) this.setState({ isEditing: false });
  }

  handleDoneToggling() {
    this.props.toggleDone(this.props.index);
  }

  render() {
    const { done, value } = this.props;

    return (
      <div className={todoItem}>
        {
          this.state.isEditing ? (
            <input className={todoEdit} value={value} onChange={this.handleEditing} onKeyDown={this.handleEditFinish} />
          ) : (
            <div
              className={todoText}
              onClick={this.handleDoneToggling}
              style={done ? { textDecoration: 'line-through' } : {}}
            >
              {value}
            </div>
          )
        }
        <div className={edit} onClick={this.handleEditClick}>&#9998;</div>
      </div>
    );
  }
}

export default TodoText;
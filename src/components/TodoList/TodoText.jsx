import React from 'react';
import { observer } from 'mobx-react';

import { todoItem, todoText, edit, todoEdit } from './TodoText.scss';

@observer
class TodoText extends React.Component {
  constructor() {
    super();

    this.state = { isEditing: false };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleEditFinish = this.handleEditFinish.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
  }

  handleEditClick() {
    this.setState(currentState => ({ isEditing: !currentState.isEditing }));
  }

  handleEditing({ target: { value } }) {
    console.time('change value');
    this.props.changeValue(value);
    console.timeEnd('change value');
  }

  handleEditFinish(e) {
    if (e.which === 13 || e.which === 27) this.setState({ isEditing: false });
  }

  handleDoneClick() {
    console.time('toggle Done');
    this.props.toggleDone();
    console.timeEnd('toggle Done');
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
              onClick={this.handleDoneClick}
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

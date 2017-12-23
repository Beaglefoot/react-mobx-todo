import React from 'react';
import { observer } from 'mobx-react';

import { todoItem, todoText, edit } from './TodoText.scss';

@observer
class TodoText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: props.value, isEditing: false };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleEditFinish = this.handleEditFinish.bind(this);
  }

  handleEditClick() {
    this.setState(currentState => ({ isEditing: !currentState.isEditing }));
  }

  handleEditing({ target: { value } }) {
    this.setState({ text: value });
    this.props.changeValue(value);
  }

  handleEditFinish(e) {
    if (e.which === 13 || e.which === 27) this.setState({ isEditing: false });
  }

  render() {
    const { toggleDone, done } = this.props;
    const { text } = this.state;

    return (
      <div className={todoItem}>
        {
          this.state.isEditing ? (
            <input value={text} onChange={this.handleEditing} onKeyDown={this.handleEditFinish} />
          ) : (
            <div
              className={todoText}
              onClick={() => toggleDone()}
              style={done ? { textDecoration: 'line-through' } : {}}
            >
              {text}
            </div>
          )
        }
        <div className={edit} onClick={this.handleEditClick}>&#9998;</div>
      </div>
    );
  }
}

export default TodoText;
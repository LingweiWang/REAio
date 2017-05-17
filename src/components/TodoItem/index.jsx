import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.scss'

const cx = classNames.bind(styles);

class TodoItem extends React.Component {

  static PropTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  render () {
    const { newTodo } = this.state;

    return (
      <div className={ cx('to-do-container') }>

      </div>
    );
  }

}

export default TodoItem;

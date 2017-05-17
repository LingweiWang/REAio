import React from 'react';
import classNames from 'classnames/bind';
import styles from './app.scss'

const cx = classNames.bind(styles);

class App extends React.Component {

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
        <h1 className={ cx('title') }>
          Todos
        </h1>

        <input className={ cx('to-do-input') } type="text"
               placeholder="what needs to be done?"
               autoFocus="true"
               onChange={ this.handleInputChange }
               value={ newTodo }
               onkeyDown={ this.handleAddNewTodo } />
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  handleAddNewTodo = (e) => {
    if (e.keyCode === 13) {
      
    }
  }
}

export default App;

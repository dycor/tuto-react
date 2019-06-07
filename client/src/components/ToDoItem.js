import React from 'react';

class ToDoItem extends React.Component{
  render(){
    return <li style={{
      opacity: this.props.todo.completed ? 0.5 : 1,
      backgroundColor: 'red'
    }} onClick={ () => this.props.onComplete(this.props.todo)}>
      {this.props.todo.text};
    </li>
  }
}

export default ToDoItem;
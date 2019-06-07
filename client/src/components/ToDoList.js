import React from 'react';
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component{
  state = {
    todos : [
      {text : "test" , completed : true},
      {text : "test2"}
    ]
  };

  handleComplete = todo => {
    this.setState({
      todos : this.state.todos.map(item => {
        if(item.text === todo.text) item.completed = !item.completed
        return item;
      })
    })
  };

  handleDelete = todo => {
    this.setState({
      todos : this.state.todos.filter(item => item.completed = !item.completed)
    })
  };

  render(){
    const { todos } = this.state;
    return <ul>
      {
        todos.map(item => <ToDoItem key={item.text} todo={item} onComplete={this.handleComplete} onDelete={this.handleDelete}/>)
      }
    </ul>
  }
}

export default ToDoList;
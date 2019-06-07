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

  render(){
    const { todos } = this.state;
    return <ul>
      {
        todos.map(item => <ToDoItem key={item.text} todo={item} onComplete={this.handleComplete}/>)
      }
    </ul>
  }
}

export default ToDoList;
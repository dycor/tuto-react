import React from 'react';
import ToDoItem from "./ToDoItem";
import TodoForm from "./TodoForm";

class ToDoList extends React.Component{

  componentDidMount(){
    this.props.loadTodos();
  }

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
      todos : this.props.todos.filter(item => item.completed = !item.completed)
    })
  };

  handleNew = todo => {
    this.setState({
      todos : [...this.state.todos, todo]
    })
  };

  render(){
    return <>
      <TodoForm onNew={this.handleNew}/>
      <ul>
        {
          this.props.todos.map(item => <ToDoItem key={item.text} todo={item} onComplete={this.handleComplete} onDelete={this.handleDelete}/>)
        }
      </ul>
      </>

  }
}

export default ToDoList;
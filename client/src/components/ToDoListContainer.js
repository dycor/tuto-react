import React from 'react';
import ToDoList from "./ToDoList";
import { fetchTodo } from '../redux/actions/todo';
import { connect } from 'react-redux';

class ToDoListContainer extends React.Component{
  componentDidMount(){
    this.props.loadTodos();
  }

  render() {
    return <ToDoList todos={this.props.todos}/>
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps  = dispatch => {
  return {
    loadTodos : () => dispatch(fetchTodo())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
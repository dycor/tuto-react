import React from 'react';
import ToDoList from "./ToDoList";
import { fetchTodo } from '../redux/actions/todo';
import { connect } from 'react-redux';
import TodoList from './ToDoList'

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
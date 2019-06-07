import React from 'react';

class ToDoList extends React.Component{
  render(){
    const todos = [{text: "test"},{text :"test2"}];
    return <ul>
      {
        todos.map(item => <li> {item.text}</li>)
      }
    </ul>
  }
}

export default ToDoList;
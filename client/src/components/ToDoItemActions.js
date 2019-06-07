import React from 'react';

class ToDoItemActions extends React.Component{
  render(){
    const { onDelete, onComplete } = this.props;
    return (
      <>
        <a onClick={onDelete}>Delete</a>
        <a onClick={onComplete}>Complete</a>
      </>
    );

  }
}

export default ToDoItemActions;
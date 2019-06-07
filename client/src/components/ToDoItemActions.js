import React from 'react';

const  ToDoItemActions  = (props) => {
    const { onDelete, onComplete } = props;
    return (
      <>
        <a onClick={onDelete}>Delete</a>
        <a onClick={onComplete}>Complete</a>
      </>
    );

  };

export default ToDoItemActions;
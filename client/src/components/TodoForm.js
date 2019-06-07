import React from 'react';

class TodoForm extends React.Component{

  state = {
    text : ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onNew(this.state);
    return false;
  };

  render(){
    return <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={ event => this.setState({text : event.currentTarget.value})}/>
      <button type="submit">Valider</button>
    </form>
  }
}

export default TodoForm;
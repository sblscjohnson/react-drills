import React, { Component } from 'react';
import Todo from './Todo'

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)  
  }
  
  handleNewItem(val) {
    this.setState({
      newItem: val
    })
  }
  
  handleAddTodo() {
    this.props.new(this.state.newItem);
    this.setState({
      newItem: ''
    })
  }
  
  render() {
    return (
      <div>
        <input 
          placeholder='Add to list'
          onChange={(e) => this.handleNewItem(e.target.value)}
          value={this.state.newItem}
        />
        <button onClick={this.handleAddTodo}>Add Item!</button> 
      </div>   
    )
  }
}

export default NewTask;
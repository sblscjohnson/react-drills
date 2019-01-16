import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from './Components/NewTask';
import List from './Components/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
    this.handleNewTask = this.handleNewTask.bind(this)
  }
    
  handleNewTask(val) {
    this.setState({
      tasks: [this.state.tasks, val]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <NewTask new={this.handleNewTask} />
        <List taskList={this.state.tasks} />
      </div>
    );
  }
}

export default App;

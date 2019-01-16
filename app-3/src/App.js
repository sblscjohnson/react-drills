import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            filteredString: '',
            shoppingList: ['soda', 'salt', 'rice', 'apples']
        }
    }
    
handleFiltered(val) {
 this.setState({
     filteredString : val
 })   
}

    
  render() {   
    let displayed = this.state.shoppingList.filter((val,i,arr) => {
        return (val.includes(this.state.filteredString))
    }).map((val,i,arr) => {
          return (<h2 key={i}>{val}</h2>)
      })
      
    return (
      <div className="App">
        <input onChange={(e) => this.handleFiltered(e.target.value)} type='text' />
        {displayed}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            arrayOfThings: ['cheese','mtn dew']
        }
    }

    

  render() {
      
      let newArr = this.state.arrayOfThings.map((val,i,arr) => {
          return (<h2>{val}</h2>)
      })
      
      
    return (
      <div className="App">
        {newArr}
      </div>
    )
  }
}

export default App;

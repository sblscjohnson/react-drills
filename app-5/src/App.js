import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image fromNet={'https://1d4chan.org/images/thumb/0/03/Toothless_dragon1.jpg/300px-Toothless_dragon1.jpg'} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ``,
            password: ``
        }    
    }
    
    handleUser(val) {
        this.setState({
            username: val
        })
    }
    
    handlePass(val) {
        this.setState({
            password: val
        })
    }
    
    handleAlert() {
        alert(`Username:  ${this.state.username} Password:  ${this.state.password}`)
    }
    
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUser(e.target.value)} />
        <input onChange={(e) => this.handlePass(e.target.value)} />
        <button onClick={(e) => this.handleAlert(e.target.value)}>Login</button>
      </div>
    );
  }
}

export default Login;
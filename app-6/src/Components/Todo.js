import React, {Component} from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            newItem: ''
        }
    }
        
    handleNewItem(val) {
        this.setState({
            newItem: val
        })
    }
        
    handleAddTodo(newItem) {
        let arr1 = this.state.tasks
        arr1.push(this.state.newItem)
        
        this.setState({
            tasks: arr1,
            newItem: ``
        })         
    }
    
    render() {
    let mappedArr = this.state.tasks.map((el,i,arr) => {
            return (
                <h2 key={i}>{el}</h2>
            )
        })
    
    return (
        <div>
            <h1>My To-Do List</h1>
              
                <input 
                placeholder='Add items'
                onChange={(e) => this.handleNewItem(e.target.value)}
                value={this.state.newItem}
                />
                <button onClick={() => this.handleAddTodo()}>Add Item!</button> 
        
        {mappedArr}
        </div>
                
    )
    }
}
    
    
export default Todo;
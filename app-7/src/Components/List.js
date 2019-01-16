import React, { Component } from 'react';
import Todo from './Todo'

function List (props) {
    
    let mappedArr = props.taskList.map((el,i,arr) => {
      return (
        <Todo key={i} performs={el} />
      )
    })
    
    return(
      <div>
        {mappedArr}
      </div>
    )  
  }

export default List;
import React, { Component } from 'react';

class Like extends Component {
  state ={
    Likes: 10
  }
  increaseLikes = ()=>{
    this.setState((preState, preProps)=>{
      return{
        // {likes: preState.likes + 1}
        likes: preState.likes < 5 ? preState.likes + 1 : preState.likes = 5
      }
    })
  }
  decreaseLikes = () =>{
    this.setState((preState, preProps) => {
      return {
        // {likes: preState.likes -1}
        likes: preState.likes > 0 ? preState.likes - 1 : preState.likes = 0
      }
    })
  }
  reSet = () =>{
    this.setState((preState, preProps) => {
      return { likes: preState.likes = 0 }
    })
  }
  render(){
    return(
      <div>
        <h1> This is my React App That Returns Likes </h1>
        <h3> Likes: {this.state.likes} </h3>
        <button onClick={this.increaseLikes} className='increase'> Like </button>
        <button onClick={this.decreaseLikes}> Unlike </button>
        <button onClick={this.reSet}>Reset </button>
      </div>
    )
  }
}
export default Like;
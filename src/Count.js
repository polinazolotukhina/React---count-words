import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Count extends  React.Component {
  constructor(props){
      super(props);
      this.state = {userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
    
}

  countWords(words){
    words = words.split(" ").sort();
    let unique = {};
    for (let i = 0; i < words.length; i++){
      if(isNaN(words[i])) {
        unique[words[i]] = 1 + (unique[words[i]] || 0);
      }
    }
    return JSON.stringify(unique); 
  }

   handleUserInput(e) {
    this.setState({
      userInput: this.countWords(e.target.value)
    });
  }

  render() {
    return (
      <div className="container">
        <form>
        <p>Enter text to count how many time each word is used</p><br />
      <textarea rows="5" cols="90" onChange={this.handleUserInput}></textarea>

      <br/>
      <textarea rows="5" cols="90" value={this.state.userInput}></textarea>
  </form>  

      </div>
    );
  }
}

export default Count;

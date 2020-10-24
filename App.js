import React, { Component } from 'react';

import './App.css';
import Validation from './validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state={
   userInput:''  // userInput is object state
  }

  inputChangedHandler=(event)=>{
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler=(index)=>{
    const text =this.state.userInput.split('');  // split function is used to divide 
    text.splice(index, 1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText});

  }


  render() {
     const charList=this.state.userInput.split('').map((ch , index)=>{
      return <Char 
      character={ch}  
      key={index}
      clicked={()=> this.deleteCharHandler(index)}/>;

    });
    return (
      <div>
    <input 
    type="text"
    onChange={this.inputChangedHandler}
     value={this.state.userInput}/>
     <p>{this.state.userInput}</p>
     <Validation inputLength={this.state.userInput.length}/> // inputLength is the length of character of userInput
     {charList}
     </div> 
     
        
     
    );
  }
}

export default App;

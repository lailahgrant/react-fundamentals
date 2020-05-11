import React, { Component } from "react";
import ReactDOM from 'react-dom'

//everything invReact is a component
//2 types of components -Class components -Simple components

class Initial extends Component {
  render() {
    const language = "React";
    return (
      
      <div className="App">
       <h1>Hello, this is {language}</h1>
      </div>
    );
  }
}


ReactDOM.render(<Initial />, document.getElementById('root'));
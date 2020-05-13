import React, { Component } from "react";

import Table from "./Table";
import Form from "./Form";
import TableComponent from './TableComponent'
import TableProps from './TableProps'

class App extends Component {
  render() {
    
    //data to an array of objects(like JSON-based API)
  
    const characters = [
      
      {
        name:'Juliana',
        job:'Developer'
      },
      {
        name:'Fanny',
        job:'Moderator'
      },
      {
        name:'Francis',
        job:'AI personnel'
      },
      {
        name:'Samula',
        job:'UI/UX'
      }
      
    ]
    
    
    return (
      
      <div className="container">
        <Table />
        <Form />
        
        {/*now we are going to pass the data through to the child component(TableProps) with properties - like how we would pass data through data attributes.
        we can call the property whatever we want, the data we passing through is the variable characters & it will be put in curly braces{} since it's a js expression
        
        Now thata data is being passed through the TableProps,we have to work on accessing it from the TableProps's TableBody component        
        */}
        <TableProps characterData={characters} />
        
        <TableComponent />
      </div>
    );
  }
}

export default App;

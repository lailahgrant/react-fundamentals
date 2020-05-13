import React, { Component } from "react";

import Table from "./Table";
import Form from "./Form";
import TableComponent from "./TableComponent";
import TableProps from "./TableProps";
import TableState from "./TableState";

class App extends Component {
  //create a state object
  constructor(props) {
    super(props);
    this.state = {
      //the object will contain properties for everything you want to store in the state
      employees: [
        {
          name: "Margret",
          job: "Cook"
        },
        {
          name: "Rita",
          job: "Cleaner"
        },
        {
          name: "Kalumba",
          job: "Cook"
        },
        {
          name: "Kasoga",
          job: "Non technical staff - Lead"
        }
      ]
    };
  }

  //since we will be removing an employee from the table,we create a removeEmployee method on the parent App class
  //to retrieve the state, we use the this.state.employees or the ES6 mtd
  //to update the state, we use this.setState() -> built-in mtd for manipulating state.
  //we'll filter the array based on the index that we pass through and return a new array.

  removeEmployee = index => {
    const { employees } = this.state;

    //filter doesn't mutate but rather creates a new array and is a preferred mtd for modifying arrays in js.
    //the particular method is testing an index vs all the indices in the array and returning all ecept the one that is passed through.
    this.setState({
      employees: employees.filter((employee, i) => {
        return i !== index;
      })
    });
  };

  render() {
    //Props
    //data to an array of objects(like JSON-based API)
    const characters = [
      {
        name: "Juliana",
        job: "Developer"
      },
      {
        name: "Fanny",
        job: "Moderator"
      },
      {
        name: "Francis",
        job: "AI personnel"
      },
      {
        name: "Samula",
        job: "UI/UX"
      }
    ];

    //state
    const { employees } = this.state;

    return (
      <div className="container">
        <Table />
        <Form />

        {/*
          Props
        now we are going to pass the data through to the child component(TableProps) with properties - like how we would pass data through data attributes.
        we can call the property whatever we want, the data we passing through is the variable characters & it will be put in curly braces{} since it's a js expression
        
        Now thata data is being passed through the TableProps,we have to work on accessing it from the TableProps's TableBody component        
        */}

        <TableProps characterData={characters} />

        <hr />

        <TableComponent />

        {/*
          State
          now we pass the removeEmployee through the component and render a button next to each employee that can invoke the function
          We will pass the removeEmployee fn through as a prop to TableState
        */}
        <TableState
          employeeData={employees}
          removeEmployee={this.removeEmployee}
        />
      </div>
    );
  }
}

export default App;

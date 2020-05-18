import React from 'react'

//Right now, we're storing our character data in an array in a variable, and passing it through as props. This is good to start, but imagine if we want to be able to delete an item from the array. With props, we have a one way data flow, but with state we can update private data from a component.
//You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.

const TableHeader = () => {
  
  return(
    
    <thead>
      <tr>
        <th>Employee name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
    
  )
  
};


/*
Here's where that index we defined in the removeEmployee() method comes in. In the TableBody component, we'll pass the key/index through as a parameter, so the filter function knows which item to remove. We'll create a button with an onClick and pass it through.
*/
const TableBody = props => {
  
  const rows = props.employeeData.map(( row, index ) => {
    
    return(

    <tr key={index}>
      <td>{row.name}</td> 
      <td>{row.job}</td>  
      <td>
        
        {/*
          The onClick function must pass through a function that returns the removeCharacter() method, otherwise it will try to run automatically.
        */}
        
        <button onClick={() => props.removeEmployee(index) } >
          Delete        
        </button>  
        <button>
            Add
        </button>
      </td>  
    </tr>
    
  )
    
  })
  
  return <tbody>{rows}</tbody>
  
}


//Since we're passing it down to TableBody from TableState, we're going to have to pass it through again as a prop, just like we did with the employee data.

//In addition, since it turns out that the only components having their own states in our project are App and Form, it would be best practice to transform TableState into a simple component from the class component it currently is.
const TableState = props => {
  
  const {employeeData, removeEmployee, theemployees} =props;
  
  return(
  
    <table>
    <TableHeader />
            
     <TableBody employeeData={employeeData} removeEmployee={removeEmployee} editemployeeData={theemployees} />
    </table>
  
  )
  
}

export default TableState;
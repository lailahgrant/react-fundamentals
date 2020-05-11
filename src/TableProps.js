/*
Props
in the Table component, we have hard coded data.
React handles its data with properties referred to a props and with state.
*/

// in this simple component, we are going to remove all the data in the TableBody

import React, {Component} from 'react'


const TableHeader = () => {
  
  return (
    
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
      </tr>
    </thead>
  
  )
  
};


//now, TableBody takes no parameter and returns a single tag
// const TableBody =() => {
//   return  <tbody />
// }
//we pass the props through as a paramter and map through thr array to return a table row for each object in the array.
//This map will be contained in the rows variable which will be returned as an expression
const TableBody = props => {
  
  const rows = props.theCharacterData.map(( row, index ) => {
    return(
    
      <tr key={index}>
         <td>{row.name}</td>
         <td>{row.job}</td>
      </tr>
      
    )
  })
  
  return <tbody>{rows}</tbody>
  
}


//now we move all the data to an array of objects(like it was a JSON-based API) into the App.js inside the render() 

class TableProps extends Component {
  render(){
    
    //make a variable to hold the prop 
    //const characterData = this.props.characterData
    const {characterData} = this.props //ES6 property shorthand 
    
    return(
    <table>
        <TableHeader />
        
        {/*Now that data is being passed through to Table, we have to work on accessing it from the other side.*/}
      <TableBody theCharacterData={characterData}/>  
    </table>
    )
  }
}

export default TableProps;
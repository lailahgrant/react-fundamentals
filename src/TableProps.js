/*
Props
Props are an effective way to pass existing data to a React component,
however the component can't change the props - Props are read-only
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


//now we move all the data to an array of objects(like it was a JSON-based API) into the App.js inside the render() 



//now, TableBody takes no parameter and returns a single tag
// const TableBody =() => {
//   return  <tbody />
// }
//we pass the props through as a paramter and map through the array to return a table row for each object in the array.
//This map will be contained in the rows variable which will be returned as an expression
const TableBody = props => {
  
  const rows = props.theCharacterData.map(( row, index ) => {
    return(
    
// added a key index to each row - You should always use keys whwn making lists in React as they identify each list item.           
      <tr key={index}>
         <td>{row.name}</td>
         <td>{row.job}</td>
      </tr>
      
    )
  })
  
  return <tbody>{rows}</tbody>
  
}



class TableProps extends Component {
  render(){
    //we can access all props through this.props
    //make a variable to hold the prop 
    //We're only passing one props through, characterData, so we'll use this.props.characterData to retrieve that data.
    //const characterData = this.props.characterData
    const {characterData} = this.props //ES6 property shorthand 
    
    return(
    <table>
        <TableHeader />
        
        {/*Since our TableProps component actually consists of two smaller simple components, I'm going to pass it through to the TableBody, once again through props.*/}
      <TableBody theCharacterData={characterData}/>  
    </table>
    )
  }
}

export default TableProps;
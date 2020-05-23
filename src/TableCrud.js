import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Actions</th>
        </tr>
      </thead>
  )
}

//Here's where that index we defined in the removeCharacter() method comes in. In the TableBody component, we'll pass the key/index through as a parameter, so the filter function knows which item to remove. We'll create a button with an onClick and pass it through.
const TableBody = props => {

//We're going to pass the props through as a parameter, and map through the array to return a table row for each object in the array. This map will be contained in the rows variable, which we'll return as an expression.

  const rows = props.characterData.map((row, index) => {
    return (
        <tr key= {index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
        </tr>
    )
  })

  return <tbody>{rows};</tbody>

}

// Since we're passing it down to TableBody from Table, we're going to have to pass it through again as a prop, just like we did with the character data.
//make it a simple component
const TableCrud = props => {

  const { characterData, removeCharacter } = props
  
    return(
      <table>

      <TableHeader />
      <TableBody characterData= {characterData} removeCharacter = {removeCharacter} />

      </table>
    )

}

export default TableCrud
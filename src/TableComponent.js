import React, {Component} from 'react';

//Simple Components - they are functions 
//they don't use class keyword

const TableHeader = () => {
  
  return (
    
    <thead>
      <tr>
        <th>Qualification</th>
        <th>Age</th>
      </tr>
    </thead>
  
  )
  
};

const TableBody = () => {
  
  return(
  
    <tbody>
      <tr>
        <td>PHD</td>
        <td>23</td>
      </tr>
      <tr>
        <td>P.7 Results</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Diploma</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Degree</td>
        <td>20</td>
      </tr>
    </tbody>
  
  )
  
};

//components can be nested in other components, simple & class components can be mixed

//class component MUST include render() and the return can only return one parent element
class TableComponent extends Component {
  
  render(){
    
    return(
    
      <table>
        <TableHeader />
        <TableBody />
      </table>
    
    )
    
  }
  
}

export default TableComponent
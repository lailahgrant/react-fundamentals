//class components
import React, {Component} from 'react'

class Table extends Component {
  
  render(){
    
    return(
    
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lailah</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Bushra</td>
            <td>Student</td>
          </tr>
          <tr>
            <td>Waswa</td>
            <td>IMS</td>
          </tr>
          <tr>
            <td>Kato</td>
            <td>Doctor</td>
          </tr>
        </tbody>
      </table>
      
    )
    
  }
  
  
}

export default Table
import React, { Component } from 'react'

import Table  from './Table'

class App extends Component {

  state = {
    // characters: [
    //   {
    //     name:'Lailah',
    //     job: 'Cloud developer'
    //   },
    //   {
    //     name: 'Kato',
    //     job: 'Doctor'
    //   },
    //   {
    //     name: 'Waswa',
    //     job: 'Cycber spcialist'
    //   },
    //   {
    //     name: 'Bushra',
    //     job: 'Intern'
    //   },
    //   {
    //     name: 'uliana',
    //     job: 'Front-end developer'
    //   }
    // ]

    characters:[]
  }

  removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {

    const {characters} = this.state
   
    return(
       <div className="container">
        <h1>Hello React </h1>
        {/*<Table />*/}

{/*pass removeCharacter as a prop to Table */}
        <Table characterData={characters}  removeCharacter= {this.removeCharacter}  />

    </div>
    )

  }

}

export default App
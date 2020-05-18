import React, { Component } from 'react'

export default class TheForm extends Component {

//what if we wanted to be able to add new data to state? In a real world application, you'd more likely start with empty state and add to it, such as with a to-do list or a shopping cart.

constructor(props){
    super(props);
//We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state.
    this.initialState = {
        name: '',
        job: ''
    }

    this.state = this.initialState;
}

//Our goal for this form will be to update the state of Form every time a field is changed in the form, and when we submit, all that data will pass to the App state, which will then update the Table.

//First, we'll make the function that will run every time a change is made to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs.
    handleChange = event => {
        const {name, value} = event.target
    
        this.setState({
            [name] : value,
        });

    }

    //Now in Form, we'll create a method called submitForm() that will call the handleSubmit function, and pass the Form state through as the character parameter we defined earlier. It will also reset the state to the initial state, to clear the form after submit.
    submitForm = event => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }



    //Let's get this working before we move on to submitting the form. In the render, let's get our two properties from state, and assign them as the values that correspond to the proper form keys. We'll run the handleChange() method as the onChange of the input, and finally we'll export the Form component.
    render() {

        const {name, job} = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                id="name"
                value= {name}
                onChange={this.handleChange}
                />

                <label htmlFor>Job</label>
                <input 
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}
                />

{/* Finally, we'll add a submit button to submit the form. We're using an onClick instead of an onSubmit since we're not using the standard submit functionality. The click will call the submitForm we just made. */}
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        );
    }
}

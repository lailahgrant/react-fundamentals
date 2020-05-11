import React, { Component } from "react";

//Simple Components
//this component doesn't use the class keyword

const RegisterForm = () => {
  return (
    <div className="my-form">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label for="pwd">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter password" name="pwd" required />

      <label for="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />
      <hr />

      <p>
        By creating an account you agree to our <a href="#"> Terms & Privacy</a>
      </p>

      <button type="submit" className="registerBtn">
        Register
      </button>

      <div className="my-form signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </div>
  );
};

class Form extends Component {
  render() {
    return (
      <form>
        <RegisterForm />
      </form>
    );
  }
}

export default Form;

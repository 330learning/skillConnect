import React, { Component } from 'react';
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


class Signin extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  updateUsername(evt) {
    this.setState({ username: evt.target.value})
  }

  updatePassword(evt) {
    this.setState({ password: evt.target.value})
  }

  handleClick() {
    if (this.state.username === "") {
      alert("Please enter username!")
    }
    else if (this.state.password === "") {
      alert("Please enter password!")
    }
    else {
      window.location.href="/Learn"
    }
  }

  render() {
    return (
      <div className="Signin">
        <header className="Signin-header">
        <p> SIGN IN</p>
          <TextField
            className = "Standard-input"
            label="Username:"
            type="search"
            margin="normal"
            value={this.state.username}
            onChange={this.updateUsername}
          />
          <div className="Password">
          <TextField
            className = "Standard-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          {/* <p>Forgot Password</p> */}
          </div>
            <Button variant="contained" color="primary" id="sign-in" onClick={this.handleClick}>
              Sign in
            </Button>
          <div id="sign-up-div">
            <p id="sign-up-p">Don't have an account?</p>
            </div>
            <div>
            <NavLink to="/Signup" style={{textDecoration:'none'}} >
            <Button variant="contained" color="secondary" id="sign-up">
              Sign up
            </Button>
            </NavLink>

          </div>
        </header>

      </div>

    );
  }
}

export default Signin;

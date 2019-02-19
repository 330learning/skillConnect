import React, { Component } from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        <p> SIGN IN</p>
          <TextField
            className = "Standard-input"
            label="Username:"
            type="search"
            margin="normal"
          />
          <div className="Password">
          <TextField
            className = "Standard-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          {/* <p>Forgot Password</p> */}
          </div>

          <Button variant="contained" color="primary" id="sign-in">
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

export default Login;

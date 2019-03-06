import React, { Component } from 'react';
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import {login} from '../Actions/Actions'
import { connect } from 'react-redux';


const mapDispatchToProps = {
  login,
 };

 const bpitt = {
   first : 'Brad',
   last : 'Pitt',
   age : 55,
   gender : 'Male',
   email : 'i-dont-know@gmail.com',
   username : 'bpitt',
   avatar: require('../Images/bradpitt.png')
 }

 const janiston = {
   first : 'Jennifer',
   last : 'Aniston',
   age : 50,
   gender : 'Femail',
   email : 'i-hate-brad-pitt@gmail.com',
   username: 'janiston',
   avatar: require('../Images/janiston.jpg')
 }

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
    } else if (this.state.username === "bpitt") {
      //change redux state
      this.props.login(bpitt)
      this.props.history.push('Learn')

    } else if (this.state.username === "janiston") {
      //change redux state
      this.props.login(janiston)
      this.props.history.push('Learn')
    }
    else {
      alert("User Not Found!")
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

export default connect(null, mapDispatchToProps)(Signin);

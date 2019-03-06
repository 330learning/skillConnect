import React, { Component } from 'react';
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink} from "react-router-dom";

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      warning1: false,
      warning2: false,
    }
  }

  handleSignin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "") {
      this.setState({warning1: true});
    }
    else if (password === "") {
      this.setState({warning2: true});
    }
    else {
      this.props.history.push('Learn')
    }
  }

  handleWarning1Close() {
    this.setState({warning1: false});
  }

  handleWarning2Close() {
    this.setState({warning2: false});
  }

  render() {
    return (
      <div className="Signin">
        <header className="Signin-header">
        <p> SIGN IN </p>
          <TextField
            className = "Standard-input"
            label="Username:"
            type="search"
            margin="normal"
            id="username"
          />
          <div className="Password">
          <TextField
            className = "Standard-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
            id="password"
          />
          {/* <p>Forgot Password</p> */}
          </div>
            <Button variant="contained" color="primary" id="sign-in" onClick={() => this.handleSignin()}>
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

        {/* username empty warning */}
        <Dialog
        open={this.state.warning1}
        onClose={() => this.handleWarning1Close()}
        >
          <DialogTitle>
            {"Please Check Your Username:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Username cannot be empty!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleWarning1Close()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* password empty warning */}
        <Dialog
        open={this.state.warning2}
        onClose={() => this.handleWarning2Close()}
        >
          <DialogTitle>
            {"Please Check Your Password:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Password cannot be empty!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleWarning2Close()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    );
  }
}

export default Signin;

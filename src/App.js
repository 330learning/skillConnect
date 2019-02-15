import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="title">skillConnect</p>
          <TextField
            id="standard-search"
            label="Username:"
            type="search"
            margin="normal"
          />

          <TextField
            id="standard-password-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />

          <Button variant="contained" color="primary" id="sign-in">
            Sign in
          </Button>
          <div id="sign-up-div">
            <p id="sign-up-p">Don't have an account?  </p>
            <Button variant="contained" color="secondary" id="sign-up">
              Sign up
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

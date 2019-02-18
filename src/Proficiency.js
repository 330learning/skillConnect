import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';


class Proficiency extends Component {
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

export default Proficiency;
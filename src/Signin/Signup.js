import React, { Component } from 'react';
import './Signup.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import  Select from 'react-select';



class Signup extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      password2: ""
    }
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updatePassword2 = this.updatePassword2.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  updateUsername(evt) {
    this.setState({ username: evt.target.value})
  }

  updatePassword(evt) {
    this.setState({ password: evt.target.value})
  }

  updatePassword2(evt) {
    this.setState({ password2: evt.target.value})
  }

  handleClick() {
    if (this.state.username === "") {
      alert("Please enter username!")
    }
    else if (this.state.password === "") {
      alert("Please enter password!")
    } else if (this.state.password !== this.state.password2) {
      alert("Passwords are not the same!")
    }
    else {
      this.props.history.goBack()
    }
  }

    render() {
        //options and styles for the selector
        var options = [
            {value: 'Arts', label:'Arts'},
            {value: 'Chem', label: 'Chemistry'},
            {value: 'Computer', label: 'Computer'},
            {value: 'History', label: 'History'},
            {value: 'Math', label: 'Math'},
            {value: 'Others', label:'Others'}
        ]

        var selectorStyle = {
            control: base => ({
                ...base,
                fontSize:"18px"
            }),
            menu: base => ({
                ...base,
                fontSize:"14px"
            })
        }

        return(
        <header className="Signup-header">
        
        <p> SIGN UP</p>
          <TextField
            className = "Standard-input"
            label="Username:"
            type="search"
            margin="normal"
            value={this.state.username}
            onChange={this.updateUsername}
          />
          <TextField
            className = "Standard-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <TextField
            className = "Standard-input"
            label="Confirm Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password2}
            onChange={this.updatePassword2}
          />

        <p id="type-of-user">Field of Interests</p>
          <Select className = "Selector" options = {options} isMulti styles={selectorStyle}/>
        
          <Button variant="contained" color="primary" id="submit" onClick={this.handleClick}>
            SUBMIT
          </Button>

          <NavLink to="/" style={{textDecoration:'none'}} >
          <Button variant="contained" color="secondary" id="cancel">
            CANCEL
          </Button>
          </NavLink>

        </header>

        );
    }

}

export default Signup;
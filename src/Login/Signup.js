import React, { Component } from 'react';
import './Signup.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import  Select from 'react-select';



class Signup extends Component {

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
          />
          <TextField
            className = "Standard-input"
            label="Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <TextField
            className = "Standard-input"
            label="Confirm Password:"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />

        <p id="type-of-user">Field of Interests</p>
        <Select className = "Selector" options = {options} isMulti styles={selectorStyle}/>
        
        <NavLink to="/" style={{textDecoration:'none'}} >
          <Button variant="contained" color="primary" id="sign-in">
            FINISH
          </Button>
          </NavLink>

            <NavLink to="/" style={{textDecoration:'none'}} >
            <Button variant="contained" color="secondary" id="sign-up">
              CANCEL
            </Button>
            </NavLink>

        </header>

        );
    }

}

export default Signup;
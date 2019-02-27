import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Profile.css";
import Button from '@material-ui/core/Button';
import NavBar from "../Components/NavBar";
import ProfileCard from './ProfileCard';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Profile extends Component {
    state = {
        firstName: "Old",
        lastName: "Master",
        age: 85,
        email: "naive@gmail.com",
        gender: "None"
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        var { firstName, lastName, age, email, gender } = this.state;
        var options = [
            { value: 'Arts', label: 'Arts' },
            { value: 'Chem', label: 'Chemistry' },
            { value: 'Computer', label: 'Computer' },
            { value: 'History', label: 'History' },
            { value: 'Math', label: 'Math' },
            { value: 'Others', label: 'Others' }
        ]
        var selectorStyle = {
            control: base => ({
                ...base,
                fontSize: "18px",
            }),
            menu: base => ({
                ...base,
                fontSize: "14px"
            })
        }

        var divStyle = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#dfe3ee"
        }

        var textStyle = {
            width: "300px"
        }

        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <NavBar noBack={true} />
                <div style={{ height: "50px" }}></div>
                <h1>User Profile</h1>
                <img src={require("../Images/1.png")} />
                <ProfileCard></ProfileCard>
                <br />
                <br />
                <Link to="/EditProfile">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Edit Profile
                    </Button>
                </Link>
                
                <div style={{ height: "500px" }}></div>
                
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
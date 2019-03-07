import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Profile.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NavBar from "../Components/NavBar";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from 'react-router-dom';
import '../Signin/Signin.css'



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
    dialogTitle: {
        backgroundColor:"#3b5998",
        '& h2': {color: 'white',}
    },
    dialogContent: {
        marginTop: 30,
        minWidth: 350,
        minHeight: 40,
    },
    dialogText: {
        fontSize: 18,
        color: "black",
    },
});

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: false,
            firstName: "Old",
            lastName: "Master",
            age: 0,
            email: "naive@gmail.com",
            gender: "Male",
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick() {
        this.setState({alert: true})
    }

    handleClickClose() {
        this.setState({alert: false})
        this.props.history.goBack();
    }

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
                <TextField
                    id="standard-with-placeholder"
                    label="First Name:"
                    placeholder={firstName}
                    className = "Standard-input"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="Last Name:"
                    placeholder={lastName}
                    className = "Standard-input"
                    margin="normal"
                />

                <TextField
                    id="standard-with-placeholder"
                    label="Your Age:"
                    placeholder="Only numbers allowed."
                    type="number"
                    className = "Standard-input"
                    margin="normal"
                    onChange={this.handleChange}
                />
                <br />
                <FormControl className={classes.formControl} style={{ width: "400px" }}>
                    <InputLabel htmlFor="age-simple">Gender</InputLabel>
                    <Select
                        value={this.state.gender}
                        onChange={this.handleSelectChange}
                        inputProps={{
                            name: 'gender',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={20}>Male</MenuItem>
                        <MenuItem value={30}>Female</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="standard-with-placeholder"
                    label="Your Email:"
                    placeholder={email}
                    className = "Standard-input"
                    margin="normal"
                />
                <br />
                <br />

                <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleClick()}>
                    OK
                </Button>
                <div style={{ height: "500px" }}></div>


                {/* profile updated alert */}
                <Dialog open={this.state.alert} onClose={() => this.handleClickClose()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Profile Updated!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    You have successfully Updated your profile!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClickClose()} color="primary">
                    OK
                    </Button>
                </DialogActions>
                </Dialog>

            </div>
        );
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);
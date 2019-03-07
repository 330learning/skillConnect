import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Teach.css"
import TeachCard from "../Components/TeachCard";
import NavBar from "../Components/NavBar";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import HTML from "../Images/HTML.jpg";
import AmericanHistory from "../Images/AmericanHistory.jpg";
import Calculus from "../Images/Calculus.jpg";
import paintingArt from "../Images/painting.jpg";
import NewCourse from "../Images/NewCourse.png";


const styles = {
    card: {
        minWidth: 325,
        maxWidth: 325,
        minHeight: 397,
        margin: 20,
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
    pAddIcon: {
        fontSize: 80,
    },
    addIcon: {
        fontSize: "inherit",
    },
};


class Teach extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            add: false,
            warning1: false,
            warning2: false,
            count: 0,
            nameList: [],
            descList: [],
        }
    }

    handleAdd() {
        this.setState({add: true});
    }

    handleAddClose() {
        this.setState({add: false});
    }

    handleAddCloseAndUpdate() {
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        if (name === "") {
            this.setState({warning1: true});
        } 
        else if (description === "") {
            this.setState({warning2: true});
        }
        else {
            this.setState({add: false});
            this.setState({count: (this.state.count + 1)});
            this.setState({nameList: this.state.nameList.concat([name])});
            this.setState({descList: this.state.descList.concat([description])});
        }
    }
    
    handleWarning1Close() {
        this.setState({warning1: false});
    }

    handleWarning2Close() {
        this.setState({warning2: false});
    }


    showNewCards() {
        let list = [];
        for (var i = 0; i < this.state.count; i++) {
            list.push(<TeachCard name={this.state.nameList[i]} intro={this.state.descList[i]} image={NewCourse} />);
        }
        return list;
    }
    

    render() {
        const { classes } = this.props;
        var html = "This course is designed to introduce students to those basic grammatical rules in HTML. " + 
            "HTML is the standard markup language for creating web pages and web applications.";

        var american = "This course provides a one-year survey of American " +
            "history from the Colonial Period and the American Revolution to the" +
            "present day, with an emphasis on the twentieth century.";

        var calculus = "This course is designed to introduce students to those most practical calculus method, including " + 
                "differential calculus, integral calculus, and all other useful theorems.";

        var painting = "This course is a basic studio course in the media and techniques of painting.  " +
            "Activity will emphasize the study of color, structure, creativity and aesthetic values in general." +
            "present day, with an emphasis on the twentieth century.";

        

        if (this.state.count >= 0) {
            return (
                <div className="Teach">
                    <NavBar noBack={true} />
                    <p id="course-header"> Courses You're Teaching </p>
                    <header className="Teach-header">
                        <TeachCard name="HTML" intro={html} image={HTML} />
                        <TeachCard name="American History" intro={american} image={AmericanHistory} />
                        <TeachCard name="Calculus" intro={calculus} image={Calculus} />
                        <TeachCard name="Painting Art" intro={painting} image={paintingArt} />
                        {this.showNewCards()}
                        <Button variant="contained" color="primary" className={classes.card} onClick={() => this.handleAdd()}>
                            <p className={classes.pAddIcon}><AddIcon className={classes.addIcon}/></p>
                        </Button>

                    </header>

                    {/* Fill form to add new course */}
                    <Dialog open={this.state.add} onClose={() => this.handleAddClose()}>
                        <DialogTitle className={classes.dialogTitle}>{"Add course"}</DialogTitle>
                        <DialogContent className={classes.dialogContent}>
                            <DialogContentText className={classes.dialogText}>
                                To add a new course, please fill in the form below.
                            </DialogContentText>
                            <TextField
                                id="name"
                                label="Course Name:"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="description"
                                label="Course Description:"
                                margin="normal"
                                multiline
                                rows="4"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={() => this.handleAddCloseAndUpdate()}>
                                Submit
                            </Button>
                            <Button color="primary" onClick={() => this.handleAddClose()}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>

                    
                    {/* Course Name empty warning */}
                    <Dialog open={this.state.warning1} onClose={() => this.handleWarning1Close()}>
                    <DialogTitle className={classes.dialogTitle}>
                        {"Please Check the Course Name"}
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText className={classes.dialogText}>
                        Course name cannot be empty!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleWarning1Close()} color="primary">
                        OK
                        </Button>
                    </DialogActions>
                    </Dialog>

                    {/* Course Description empty warning */}
                    <Dialog open={this.state.warning2} onClose={() => this.handleWarning2Close()}>
                    <DialogTitle className={classes.dialogTitle}>
                        {"Please Check the Course description"}
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText className={classes.dialogText}>
                        Course description cannot be empty!
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
}

Teach.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teach);
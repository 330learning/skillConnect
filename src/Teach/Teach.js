import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Teach.css"
import TeachCard from "../Components/TeachCard";
import NavBar from "../Components/NavBar";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

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
};


class Teach extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count: 0,
        }
    }

    handleAdd() {
        this.setState({count: (this.state.count + 1)})
    }

    getNewCards() {
        let list = []
        console.log(this.state.count)
        for (var i = 0; i < this.state.count; i++) {
            list.push(<TeachCard name="New Courses" intro={"default intro"} image={NewCourse} />)
        }
        return list
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
                        {this.getNewCards()}
                        <Button variant="contained" color="primary" className={classes.card} onClick={() => this.handleAdd()}>
                            <h1><AddIcon /></h1>
                        </Button>
                    </header>
                </div>
            );
        }
    }
}

Teach.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teach);
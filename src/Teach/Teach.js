import React from "react";
import "./Teach.css"
import TeachCard from "../Components/TeachCard";
import NavBar from "../Components/NavBar";

import HTML from "../Images/HTML.jpg";
import AmericanHistory from "../Images/AmericanHistory.jpg";
import Calculus from "../Images/Calculus.jpg";
import paintingArt from "../Images/painting.jpg";


class Teach extends React.Component {
    render() {
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

        


        return (
            <div className="Teach">
                <NavBar noBack={true} />
                <p id="course-header"> Courses You're Teaching </p>
                <header className="Teach-header">
                    <TeachCard name="HTML" intro={html} image={HTML} />
                    <TeachCard name="American History" intro={american} image={AmericanHistory} />
                    <TeachCard name="Calculus" intro={calculus} image={Calculus} />
                    <TeachCard name="Painting Art" intro={painting} image={paintingArt} />
                </header>
            </div>
        )
    }


}
export default Teach;
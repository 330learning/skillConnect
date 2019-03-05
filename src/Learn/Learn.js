import React from "react";
import NavBar from "../Components/NavBar"

import "./Learn.css"
import CourseCard from "../Components/CourseCard";
import Math from "../Images/Math.jpg"
import Speech from "../Images/Speech.jpg"
import Programming from "../Images/Programming.jpg"
import History from "../Images/History.jpg"
import Art from "../Images/Art.jpg"
import Literature from "../Images/Literature.jpg"
import Music from "../Images/music.jpg"
import Sports from "../Images/sports.jpg"
import Design from "../Images/design.jpg"
import Language from "../Images/language.jpg"


class Learn extends React.Component {
  render() {
    return (
      <div className="Learn">
        <NavBar noBack={true} />
        <p id="course-header"> Select A Category </p>
        <header className="Learn-header">
          <React.Fragment>
          <CourseCard image={Art} title="Art" letter="A" to="/Learn/Art"/>
          <CourseCard image={Language} title="Language" letter="L" to="/Learn/Language"/>
          <CourseCard image={History} title="History" letter="H" to="/Learn/History"/>
          <CourseCard image={Literature} title="Literature" letter="L" to="/Learn/Literature"/>
          <CourseCard image={Design} title="Design" letter="D" to="/Learn/Design"/>

          <CourseCard image={Math} title="Math" letter="M" to="/Learn/Math"/>
          <CourseCard image={Programming} title="Programming" letter="P" to="/Learn/Programming"/>
          <CourseCard image={Speech} title="Speech" letter="S" to="/Learn/Speech"/>
          <CourseCard image={Music} title="Music" letter="M" to="/Learn/Music"/>
          <CourseCard image={Sports} title="Sports" letter="S" to="/Learn/Sports"/>
          </React.Fragment> 

        </header>

      </div>
    );
  }
}
export default Learn;
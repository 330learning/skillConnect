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


class Learn extends React.Component {
  render() {
    return (
      <div className="Learn">
        <NavBar noBack={true} />
        <p id="course-header"> Explore Courses</p>
        <header className="Learn-header">

          <CourseCard image={Art} title="Art" letter="A" to="/Learn/Art"/>
          <CourseCard image={History} title="History" letter="H" to="/Learn/History"/>
          <CourseCard image={Literature} title="Literature" letter="L" to="/Learn/Literature"/>

        </header>
        <header className="Learn-header">
          <CourseCard image={Math} title="Math" letter="M" to="/Learn/Math"/>
          <CourseCard image={Programming} title="Programming" letter="P" to="/Learn/Programming"/>
          <CourseCard image={Speech} title="Speech" letter="S" to="/Learn/Speech"/>

        </header>

      </div>
    );
  }
}
export default Learn;
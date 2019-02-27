import React from "react";
import { NavLink } from "react-router-dom";
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

          <CourseCard image={Art} title="Art" letter="A" heartColor="#c5d2e8" />
          <NavLink to='/Learn/History' style={{ textDecoration: 'none' }}>
            <CourseCard image={History} title="History" letter="H" heartColor="#c5d2e8" />
          </NavLink>
          <CourseCard image={Literature} title="Literature" letter="L" heartColor="#c5d2e8" />

        </header>
        <header className="Learn-header">
          <NavLink to='/Learn/Math' style={{ textDecoration: 'none' }}>
          <CourseCard image={Math} title="Math" letter="M" heartColor="#c5d2e8" />
          </NavLink>
          <NavLink to='/Learn/Programming' style={{ textDecoration: 'none' }}>
          <CourseCard image={Programming} title="Programming" letter="P" heartColor="#c5d2e8" />
          </NavLink>
          <CourseCard image={Speech} title="Speech" letter="S" heartColor="#c5d2e8" />

        </header>

      </div>
    );
  }
}
export default Learn;
import React from "react";
import {NavLink} from "react-router-dom";
import NavBar from "../Components/NavBar"

import "./Learn.css"
import CourseCard from "../Components/CourseCard";
import Math from "../Images/Math.jpg"
import Speech from "../Images/Speech.jpg"
import Programming from "../Images/Programming.jpg"
import History from "../Images/History.jpg"
import Art from "../Images/Art.jpg"
import Literature from "../Images/Literature.jpg"


function Learn(props) {

  return (
    <div className= "Learn">
    <NavBar noBack={true}/>
    <p id="course-header"> Explore Courses</p>
    <header className = "Learn-header">

      <CourseCard image={Art} title="Art" letter="A"/>
      <NavLink to='/Learn/History' style={{textDecoration:'none'}}>
      <CourseCard image={History} title="History" letter="H"/>
      </NavLink>
      <CourseCard image={Literature} title="Literature" letter="L"/>
    
    </header>
    <header className = "Learn-header">
      <CourseCard image={Math} title="Math" letter="M"/>
      <CourseCard image={Programming} title="Programming" letter="P"/>
      <CourseCard image={Speech} title="Speech" letter="S"/>

    </header>
      
    </div>
  );
}


export default Learn;
import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";


function About() {
  return (
  <div  className="about">
    <div className="about-top"> 
    <div className="about-info">
      Hello there , I am
      <span className="info-name"> Gulshan</span>.
      <br /> A Good Observer and Fast Learner. <br />

      <br/> <span className="info1">While(!(succeed==try()));</span> <br />
      <br/>I am a final year undergraduate at <span className="info"> GGCT(Jabalpur) </span>
       , pursuing <span className="info"> Bachelors in Computer Science</span>(expected 2023).<br/>

       <span className="info">Deep Interest in Problem Solving, Competitive Programming, and Data Structures and Algorithms.</span><br/>
       

      <br/><span className="info1">Just Trying to climb the ladder of success through code....</span>
    </div>
    <div className="about-photo">

      <img src={require("../../../assets/coding.png")} className="picture" alt=""/> 
  </div>
  </div>
  
    <SocialContact />
    
  </div>
);
  
}

export default About;
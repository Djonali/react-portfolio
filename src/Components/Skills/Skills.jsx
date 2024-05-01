import React from "react";
import "./Skills.css";
import mongoDB from "../../assets/mongodb.svg";
import oracle from "../../assets/oracle.svg";
import mysql from "../../assets/mysql.svg";
import javascript from "../../assets/logo-javascript.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import nexjs from "../../assets/nextjs.svg";
import extjs from "../../assets/extjs.png";
import flex from "../../assets/adobeflexl.png";
import bootstrap from "../../assets/bootstrap.svg";
import tailwind from "../../assets/tailwind.svg";
import framer from "../../assets/framer.svg";
import github from "../../assets/github.svg";
import jira from "../../assets/jira.svg";
import visual_studio from "../../assets/visual_studio.png";

/*
Frontend Build Tools: Webpack, Gulp,
Version Control Systems: GIT
Frontend Frameworks:  React.js, Angular


*/

const Skills = () => {
  return (
    <section id="skills" className="container-fluid skills pt-4">
      <div className="main-heading">
       <h2>SKILLS</h2>  
       {/* <div className="underline"></div>     */}
      </div>
    
      <div className="skill mt-3">
        <h3 class="heading" >Frontend Technologies/Libraries</h3>
        <div className="skill-box">
          <div className="skill-box__item">
            {/* javascript */}
            <img src={javascript} alt="" className="icon" title="Javascript" />
          </div>
          <div className="skill-box__item">
            {/* html */}
            <img src={html} alt="" className="icon" title="HTML" />
          </div>
          <div className="skill-box__item">
            {/* css */}
            <img src={css} alt="" className="icon" title="CSS" />
          </div>
          <div className="skill-box__item">
            {/* react */}
            <img src={react} alt="" className="icon" title="REACT"/>
          </div>
          <div className="skill-box__item">
            {/* framer motion */}
            <img src={framer} alt="" className="icon" title="FRAMER MOTION" />
          </div>
        </div>
      </div>
      <div className="skill  mt-3">
        <h3 class="heading">Frontend Frameworks</h3>
        <div className="skill-box">
          <div className="skill-box__item">
            {/* angular */}
            <img src={angular} alt="" className="icon"  title="ANGULAR"/>
          </div>
          <div className="skill-box__item">
            {/* nexjs */}
            <img src={nexjs} alt="" className="icon" title="NEXTJS"/>
          </div>
          <div className="skill-box__item">
            {/* extjs */}
            <img src={extjs} alt="" className="icon" title="EXTJS"/>
          </div>
          <div className="skill-box__item">
            {/* flex */}
            <img src={flex} alt="" className="icon" title="FLEX"/>
          </div>
          <div className="skill-box__item">
            {/* bootstrap */}
            <img src={bootstrap} alt="" className="icon" title="Bootstrap"/>
          </div>
          <div className="skill-box__item">
            {/* tailwind */}
            <img src={tailwind} alt="" className="icon" title="Tailwind"/>
          </div>
        </div>
      </div>
      <div className="skill  mt-3">
        <h3 class="heading">DataBases</h3>
        <div className="skill-box">
          <div className="skill-box__item">
            {/* Mongo DB */}
            <img src={mongoDB} alt="" className="icon" title="Mongo DB"/>
          </div>
          <div className="skill-box__item">
            {/* Oracle */}
            <img src={oracle} alt="" className="icon" title="Oracle"/>
          </div>
          <div className="skill-box__item">
            {/* MYSQL */}
            <img src={mysql} alt="" className="icon" title="MYSQL" />
          </div>
        </div>
      </div>
      <div className="skill  mt-3">
        <h3 class="heading">Tools and Applications</h3>
        <div className="skill-box">
          <div className="skill-box__item">
            {/* JIRA */}
            <img src={jira} alt="" className="icon" title="JIRA" />
          </div>
          <div className="skill-box__item">
            {/* GIT */}
            <img src={github} alt="" className="icon" title="GIT " />
          </div>
          <div className="skill-box__item">
            {/* VISUAL STUDIO */}
            <img src={visual_studio} alt="" className="icon" title="VISUAL STUDIO"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

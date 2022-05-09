import React from 'react'
import html from "./../assets/images/html-5.svg"
import css from "./../assets/images/css.svg"
import javascript from "./../assets/images/javascript.svg"
import react from "./../assets/images/react.svg"
import bootstrap from "./../assets/images/bootstrap.png"
import api from "./../assets/images/api.svg"
import node from "./../assets/images/Node.js_logo.svg"
import npm from "./../assets/images/Npm-logo.svg"
import github from "./../assets/images/github.svg"
import mongodb from "./../assets/images/mongodb.svg";
import heroku from "./../assets/images/heroku.svg";
// import resume from "./../assets/MateoCruzCV.pdf"

export const Skills = () => {
  return (
    <section className="hero">
    <div className="proficiencies">
        <p>Download my resume here: </p><a href={require("./../assets/MateoCruzCV.pdf").default} id="resume">Resume</a>
        <br/>      
        <h3>My Proficiencies</h3>
        <ul className='skills-list'>
            <li><img src={html} alt=""></img></li>
            <li><img src={css} alt=""></img></li>
            <li><img src={javascript} alt=""></img></li>
            <li><img src={react} alt=""></img></li>
            <li><img src={bootstrap} alt=""></img></li>
            <li><img src={api} alt=""></img></li>
            <li><img src={node} alt=""></img></li>
            <li><img src={npm} alt=""></img></li>
            <li><img src={github} alt=""></img></li>
            <li><img src={heroku} alt=""></img></li>
            <li><img src={mongodb} alt=""></img></li>
        </ul>
    </div>
</section>
  )
}

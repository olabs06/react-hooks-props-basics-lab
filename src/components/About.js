import React from "react";
import Links from "./Links";

import user from "../data/user";
console.log(user);

function About(props) {
  const isDisplayed = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}Put the bio in here</p> */}
      <p>{isDisplayed ? <About bio = {props.bio}/> : <About /> }</p>
      
    

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
    </div>
  );
}

export default About;

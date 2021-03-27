import { Router, Route, Link } from "react-router-dom";
import React from "react";
import Image from "../Image/index";
import "./style.css";

function About() {
  const styling = {
    marginTop: "50px",
    // backgroundImage: `url("../assets") `
  };

  return (
    <div className="container" style={styling}>
      <Image />

      <div className="links">
        <a href="https://www.linkedin.com/in/giovanni-orlando-a902a472/">
          <i
            className="fa fa-linkedin-square"
            style={{ fontSize: "48px", color: "green" }}
          ></i>
        </a>
        <a href="https://github.com/Gio86krt">
          <i
            class="fa fa-github"
            style={{ fontSize: "48px", color: "white" }}
          ></i>
        </a>
        <a href="./resume.pdf" download>
          <i
            class="fa fa-download"
            style={{ fontSize: "48px", color: "red" }}
          ></i>
        </a>
      </div>

      <div className="card border-info">
        <div className="card-body">
          <h3 className="card-title">About Me:</h3>
          <div className="card-text">
            Hello and welcome to my page!
            <br />
            <br />
            My name is Giovanni, I am an emerging front-end developer based in
            the wonderful frame of Toronto, Ontario.
            <br />
            <br />
            After spending almost 10 years in hospitality I decided to follow my
            passion for problem solving and to embrace the challenging task of
            coding, bringing with me the skills acquired in my previous career,
            such as: time management, quick thinking, communication and team
            work.
            <br />
            <br />
            My tech skills include JavaScript, HTML and CSS, but my "swiss-army
            knife" is constantly expanding... so stay tuned, more to come!
            <br />
            <br />
            When I'm not coding or learning something new, I like exercising,
            reading, cooking or watching a good movie. From time to time I get
            obsessed with a new subject.. in the last few months it's been
            anything related to space and astronomy.
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

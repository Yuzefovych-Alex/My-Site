import React, { Component } from "react";
import "./sass/css/about.css";
import { Link } from "react-router-dom";

import imageResume from "./images/resume-icon.webp";
import imageMy from "./images/my-photo.jpg";
import imageJS from "./images/js.webp";

class About extends Component {
  structureContent() {
    return (
      <div className="structure_content">
        <div>
          <div className="banner">
            <span className="banner_text">HI, I'M A FREELANCER</span>
            <h2 className="banner_title">Developer</h2>
            <p className="banner_discription">
              I'm a software engineer specializing in scalable web apps. Explore
              my blog, project portfolio and online resume.
            </p>
          </div>
          <div className="button_switch">
            <Link to="/portfolio">
              <button className="button_portfolio">
                <span>
                  <svg
                    className="button_portfolio_svg"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    height="1.1em"
                    width="1.1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                  View Portfolio
                </span>
              </button>
            </Link>
            <Link to="/resume">
              <button className="button_resume">
                <span>
                  <img className="button_resume_img" src={imageResume} />
                  View Resume
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="structure_content_img_box">
          <div className="structure_content_box"></div>
          <img className="structure_content_img" src={imageMy} />
        </div>
      </div>
    );
  }

  statistic(){
    return (
      <div className="statistics">
        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>5</span>
          </h2>
          <span className="statistics_data_text">
            Years of
            <br /> Experience
          </span>
        </div>

        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>110</span>
          </h2>
          <span className="statistics_data_text">
            Projects <br /> Completed
          </span>
        </div>

        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>6k</span>
          </h2>
          <span className="statistics_data_text">
            Clients
            <br /> Worldwide
          </span>
        </div>
      </div>
    );
  }

  knowledge(){
    return (
      <div className="knowledge">
        <div className="knowledge_title">
          <h2>What I do</h2>
        </div>
        <p className="knowledge_text">
          I have more than 10 years experience building software for clients all
          over the world. Below is a <br />
          quick overview of my main technical skill sets and technologies I use.
          Want to find out more
          <br /> about my experience? Check out my online resume and project
          portfolio.
        </p>
        <nav></nav>
      </div>
    );
  }

  skills(){
    return (
<div className="skills">
        <div className="skills_block">
          <img className="skills_block_img" src={imageJS} />
          <h4 className="skills_block_title">Vanilla JavaScript</h4>
          <p className="skills_block_text">
            List skills and technologies
            <br /> here. Customize as needed.
            <br /> Built on HTML5, Sass, and
            <br /> Bootstrap 5.
          </p>
        </div>
        <div className="skills_block">
          <img className="skills_block_img" src={imageJS} />
          <h4 className="skills_block_title">Angular, React & Vue</h4>
          <p className="skills_block_text">
            List skills and technologies here. Customize as needed. Built on
            HTML5, Sass, and Bootstrap 5.
          </p>
        </div>
        <div className="skills_block">
          <img className="skills_block_img" src={imageJS} />
          <h4 className="skills_block_title">Node.js</h4>
          <p className="skills_block_text">
            List skills and technologies here. Customize as needed. Built on
            HTML5, Sass, and Bootstrap 5.
          </p>
        </div>
        <div className="skills_block">
          <img className="skills_block_img" src={imageJS} />
          <h4 className="skills_block_title">Python & Django</h4>
          <p className="skills_block_text">
            List skills and technologies here. Customize as needed. Built on
            HTML5, Sass, and Bootstrap 5.
          </p>
        </div>
      </div>

    );
  }

  footerData(){
    return (
      <footer className="footer_data">
        Copyright &copy; 2024 Portfolify. All rights reserved.
      </footer>
    );
  }

  render() {
    return(
       <main>
        {this.structureContent()}
        {this.statistic()}
        {this.knowledge()}
        <div className="section"></div>
        {this.skills()}
        {this.footerData()}
    </main>);
  }
}

export default About;

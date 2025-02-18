import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/Portfolio.css";

function Portfolio() {
  return (
      <main>
        <div className="page_header">
          <h3 className="page_header_title">
            A collection of my best projects
          </h3>
          <p className="page_header_text">
            With many years in web development, I acquired extensive experience
            working on projects across multiple <br />
            industries and technologies. Let me show you my best creations.
          </p>
          <div className="button">
          <div className="button_intermediate">
            <div className="button_me">
              <Link to="/contact">
                <div className="button_me_center">
                  <svg
                    className="button_me_center_svg"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                  </svg>
                  Hire Me
                </div>
              </Link>
            </div>
          </div>
        </div>
          <div></div>
        </div>
        <div className="section"></div>
        <div className="category">
          <button className="category_button">All</button>
          <button className="category_button">Web App</button>
          <button className="category_button">Mobile App</button>
          <button className="category_button">Frontend</button>
          <button className="category_button">Backend</button>
        </div>
        <footer className="footer_data">Copyright &copy; 2024 Portfolify. All rights reserved.</footer>
      </main>
  );
}

export default Portfolio;

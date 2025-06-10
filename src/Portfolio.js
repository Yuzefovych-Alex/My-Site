import React, { Component, createRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import './sass/css/portfolio.css'
import imagePixGame from './images/ChatGPT Image 9 июн. 2025 г., 14_44_24 (1).png'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleSections: {},
    }

    this.sectionsRefs = {
      page_block: createRef(),
      button: createRef(),
      category: createRef(),
      block_project_item: createRef(),
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = { ...this.state.visibleSections }
        entries.forEach((entry) => {
          const section = entry.target.dataset.section
          if (entry.isIntersecting) {
            newVisibility[section] = true
          } else {
            newVisibility[section] = false
          }
        })
        this.setState({ visibleSections: newVisibility })
      },
      { threshold: 0.1 }
    )

    Object.entries(this.sectionsRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key
        this.observer.observe(ref.current)
      }
    })
  }

  headerPage() {
    return (
      <div
        className={`page_block ${
          this.state.visibleSections.page_block ? 'show' : ''
        }`}
        ref={this.sectionsRefs.page_block}
        data-section="page_block">
        <h3 className="page_block_title">A collection of my best projects</h3>
        <p className="page_block_text">
          With many years in web development, I acquired extensive experience
          working on projects across multiple <br />
          industries and technologies. Let me show you my best creations.
        </p>
      </div>
    )
  }

  buttonMyContact() {
    return (
      <div
        className={`button ${this.state.visibleSections.button ? 'show' : ''}`}
        ref={this.sectionsRefs.button}
        data-section="button">
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
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                </svg>
                Hire Me
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  categoryProject() {
    return (
      <div
        className={`category  ${
          this.state.visibleSections.category ? 'show' : ''
        }`}
        ref={this.sectionsRefs.category}
        data-section="category">
        <button className="category_button">All</button>
        <button className="category_button">Web App</button>
        <button className="category_button">Mobile App</button>
        <button className="category_button">Frontend</button>
        <button className="category_button">Backend</button>
      </div>
    )
  }

  footerData() {
    return (
      <footer className="footer_data">
        Copyright &copy; 2024 Portfolify. All rights reserved.
      </footer>
    )
  }

  blockProject() {
    return (
      <li className={`block_project_item ${this.state.visibleSections.block_project_item ? 'show' : ''}`}
        ref={this.sectionsRefs.block_project_item}
        data-section="block_project_item">
        <div className="block_project_item_photo">
          <img
            src={imagePixGame}
            alt="Pix Game"
            className="block_project_item_photo_img"
          />
        </div>
        <div className="block_project_section">
          <ul className="block_project_item_listData">
            <li className="block_project_item_listData_item">React Js</li>
            <li className="block_project_item_listData_item">
              Web Development
            </li>
            <li className="block_project_item_listData_item">
              Next Js
            </li>
          </ul>
          <NavLink to="/pixgame">
            <div className="block_project_item_button">
              <svg
                className="block_project_item_button_svg"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="4rem"
                width="4rem"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
              </svg>
            </div>
          </NavLink>
        </div>
        <h1 className="block_project_item_title">Pix Game</h1>
      </li>
    )
  }

  listBlockProjects() {
    return (
      <div className="block_projects">
        <ul className="list_block_projects">{this.blockProject()}</ul>
      </div>
    )
  }

  render() {
    return (
      <main>
        {this.headerPage()}
        {this.buttonMyContact()}
        <div className="section"></div>
        {/*this.categoryProject()*/}
        {this.listBlockProjects()}
        {this.footerData()}
      </main>
    )
  }
}

export default Portfolio

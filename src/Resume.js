import React, { Component, createRef } from "react";
import "./sass/css/resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSections: {},
    };

    this.sectionsRefs = {
      page_block: createRef(),
      resume_header_button: createRef(),
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = { ...this.state.visibleSections };

        entries.forEach((entry) => {
          const section = entry.target.dataset.section;
          newVisibility[section] = entry.isIntersecting;
        });

        this.setState({ visibleSections: newVisibility });
      },
      { threshold: 0.5 }
    );

    Object.values(this.sectionsRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  }

  headerPage() {
    return (
      <div
        className={`page_block ${
          this.state.visibleSections.page_block ? "show" : ""
        }`}
        ref={this.sectionsRefs.page_block}
        data-section="page_block"
      >
        <h3 className="page_block_title">Resume Online</h3>
        <p className="page_block_text"></p>
      </div>
    );
  }

  buttonDownloadResume() {
    return (
      <button
        className={`resume_header_button ${
          this.state.visibleSections.resume_header_button ? "show" : ""
        }`}
        ref={this.sectionsRefs.resume_header_button}
        data-section="resume_header_button"
      >
        <svg
          className="resume_header_button_svg"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 256 256"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
        </svg>
        Download PDF Version
      </button>
    );
  }

  render() {
    return (
      <main>
        {this.headerPage()}
        {this.buttonDownloadResume()}
        <div className="section"></div>
      </main>
    );
  }
}

export default Resume;

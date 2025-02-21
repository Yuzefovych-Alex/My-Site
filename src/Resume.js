import React, { Component, createRef } from "react";
import { saveAs } from "file-saver";
import "./sass/css/resume.css";
import myPhoto from "./images/my-photo.jpg";

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
    this.observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = { ...this.state.visibleSections };
        entries.forEach((entry) => {
          const section = entry.target.dataset.section;
          if (entry.isIntersecting) {
            newVisibility[section] = true;
          } else {
            newVisibility[section] = false;
          }
        });
        this.setState({ visibleSections: newVisibility });
      },
      { threshold: 0.1 }
    );

    Object.entries(this.sectionsRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        this.observer.observe(ref.current);
      }
    });
  }

  handleDownload() {
    const fileUrl = `${window.location.origin}/My-Site/pdf/CV1_Yuzefovych_Oleksandr.pdf`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "CV1_Yuzefovych_Oleksandr.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        onClick={this.handleDownload}
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

  resumeData() {
    return (
      <div className="resume_data">
        <div className="resume_data_header">
          <div className="resume_data_header_identification">
            <h2 className="resume_data_header_identification_title">
              Yuzefovych Oleksandr
            </h2>
            <span className="resume_data_header_identification_text">
              Sofware Developer
            </span>
          </div>
          <div className="resume_data_header_myData">
            <nav className="resume_data_header_myData_navigation">
              <div className="resume_data_header_myData_navigation_item">
                <svg
                  className="resume_data_header_myData_navigation_item_svg"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
                0123 4567 890
              </div>
              <div className="resume_data_header_myData_navigation_item">
                <svg
                  className="resume_data_header_myData_navigation_item_svg"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
                Evans@yourwebsite.com
              </div>
              <div className="resume_data_header_myData_navigation_item">
                <svg
                  className="resume_data_header_myData_navigation_item_svg"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
                New York
              </div>
            </nav>
          </div>
        </div>
        <div className="resume_data_section"></div>
        <div className="resume_data_pdf">
          <div className="resume_data_pdf_rounding">
            <img className="resume_data_pdf_rouding_img" src={myPhoto} />
          </div>
        </div>
        <div className="resume_data_section"></div>
        <div className="resume_data_experiencesSkills">
          <div className="resume_data_experiencesSkills_experiences">
            <h2 className="resume_data_experiencesSkills_title">
              Work Experiences
            </h2>
            <div className="resume_data_experiencesSkills_text">

            </div>
          </div>
          <div className="resume_data_experiencesSkills_skils">
            <h2 className="resume_data_experiencesSkills_title">Skills</h2>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <main>
        {this.headerPage()}
        {this.buttonDownloadResume()}
        <div className="section"></div>
        {this.resumeData()}
      </main>
    );
  }
}

export default Resume;

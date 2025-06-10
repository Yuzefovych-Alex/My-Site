import React, { Component, createRef, useState, useEffect } from 'react'
import './sass/css/about.css'
import { Link } from 'react-router-dom'
import imageResume from './images/resume-icon.webp'
//import imageMy from './images/my-photo.jpg'
import imageJS from './images/js.png'
import imageTY from './images/typescript.png'
import imageHTML from './images/html-5.png'
import imageCSS from './images/css-3.png'
import imageNode from './images/programing.png'
import imageReact from './images/physics.png'
import imageAngular from './images/angular.png'
import imageNext from './images/nextjs.png'
import imageMy from './images/my-image.jpg'

function TypingEffectButton() {
  const words = ['#Developer', '#Engineer']
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (deleting) {
        if (text.length > 1) {
          setText((prev) => prev.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        if (text.length < words[index].length) {
          setText(words[index].slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1000)
        }
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return <>{text}</>
}

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleSections: {},
    }

    this.sectionsRefs = {
      knowledge: createRef(),
      skills_block_1: createRef(),
      skills_block_2: createRef(),
      skills_block_3: createRef(),
      skills_block_4: createRef(),
      skills_block_5: createRef(),
      skills_block_6: createRef(),
      skills_block_7: createRef(),
      skills_block_8: createRef(),
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          const newVisibility = { ...this.state.visibleSections }
          let hasChanges = false

          entries.forEach((entry) => {
            const section = entry.target.id || entry.target.dataset.section
            if (section && newVisibility[section] !== entry.isIntersecting) {
              newVisibility[section] = entry.isIntersecting
              hasChanges = true
            }
          })

          if (hasChanges) {
            this.setState({ visibleSections: newVisibility })
          }
        })
      },
      { threshold: 0.1 }
    )

    Object.entries(this.sectionsRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.id = key
        ref.current.dataset.section = key
        this.observer.observe(ref.current)
      }
    })
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }

  structureContent() {
    return (
      <div className="structure_content">
        <div>
          <div className="banner">
            <span className="banner_text">HI, I'M A FREELANCER</span>
            <h2 className="banner_title">
              <span className="text">
                <TypingEffectButton />
              </span>
            </h2>
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
                    xmlns="http://www.w3.org/2000/svg">
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
          <div className="structure_content_img">
            <img src={imageMy} className='structure_content_img_img'/>
          </div>
        </div>
      </div>
    )
  }

  statistic() {
    return (
      <div className="statistics">
        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>4</span>
          </h2>
          <span className="statistics_data_text">
            Years of
            <br /> Experience
          </span>
        </div>

        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>12</span>
          </h2>
          <span className="statistics_data_text">
            Projects <br /> Completed
          </span>
        </div>

        <div className="statistics_data">
          <h2 className="statistics_data_title">
            <span>25</span>
          </h2>
          <span className="statistics_data_text">
            Clients
            <br /> Worldwide
          </span>
        </div>
      </div>
    )
  }

  knowledge() {
    return (
      <div
        className={`knowledge ${
          this.state.visibleSections.knowledge ? 'show' : ''
        }`}
        ref={this.sectionsRefs.knowledge}
        data-section="knowledge">
        <div className="knowledge_title">
          <h2>What I do</h2>
        </div>
        <p className="knowledge_text">
          I am a skilled full-stack developer with over 4 years of experience in
          creating scalable and high-performance web and mobile applications. I
          specialize in both front-end and back-end development, utilizing a
          broad range of modern technologies. My expertise includes JavaScript,
          Python, and frameworks such as Node.js, Express.js, React, React
          Native, and Angular. I also have strong knowledge of Docker,
          WebSockets, gRPC, and API technologies (REST, GraphQL). I am
          proficient in developing Progressive Web Apps (PWAs) and implementing
          CI/CD pipelines using GitHub Actions, GitLab CI/CD, and Jenkins.
          Additionally, I have extensive experience working with MySQL and
          PostgreSQL databases, ensuring efficient data management and smooth
          application performance.
        </p>
        <nav></nav>
      </div>
    )
  }

  skills() {
    return (
      <div className="skills">
        <div
          className={`skills_block_1 ${
            this.state.visibleSections.skills_block_1 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_1}
          data-section="skills_block_1">
          <img className="skills_block_img" src={imageJS} />
          <h4 className="skills_block_title">JavaScript</h4>
          <p className="skills_block_text">
            List skills and technologies here. Customize as needed. Built on
            HTML5, Sass, and Bootstrap 5.
          </p>
        </div>
        <div
          className={`skills_block_2 ${
            this.state.visibleSections.skills_block_2 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_2}
          data-section="skills_block_2">
          <img className="skills_block_img" src={imageTY} />
          <h4 className="skills_block_title">TypeScript</h4>
          <p className="skills_block_text">
            Advanced type safety and scalable code structure. Integrated with
            React, Next.js, and Node.js backends.
          </p>
        </div>
        <div
          className={`skills_block_3 ${
            this.state.visibleSections.skills_block_3 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_3}
          data-section="skills_block_3">
          <img className="skills_block_img" src={imageHTML} />
          <h4 className="skills_block_title">HTML</h4>
          <p className="skills_block_text">
            Semantic and accessible markup. Optimized for SEO and performance
            with HTML5 standards.
          </p>
        </div>
        <div
          className={`skills_block_4 ${
            this.state.visibleSections.skills_block_4 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_4}
          data-section="skills_block_4">
          <img className="skills_block_img" src={imageCSS} />
          <h4 className="skills_block_title">CSS</h4>
          <p className="skills_block_text">
            Responsive layouts using Flexbox, Grid, and custom properties.
            Styled with Sass, Bootstrap, and BEM methodology.
          </p>
        </div>
        <div
          className={`skills_block_5 ${
            this.state.visibleSections.skills_block_5 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_5}
          data-section="skills_block_5">
          <img className="skills_block_img" src={imageNode} />
          <h4 className="skills_block_title">Node.js (Express.js)</h4>
          <p className="skills_block_text">
            RESTful APIs and real-time apps with Express.js. Built secure and
            scalable backends with JWT, MongoDB, and PostgreSQL.
          </p>
        </div>
        <div
          className={`skills_block_6 ${
            this.state.visibleSections.skills_block_6 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_6}
          data-section="skills_block_6">
          <img className="skills_block_img" src={imageNext} />
          <h4 className="skills_block_title">Next.js</h4>
          <p className="skills_block_text">
            Server-side rendering (SSR), static site generation (SSG), and
            full-stack capabilities. Integrated API routes, middleware, and Auth
            with NextAuth.js.
          </p>
        </div>
        <div
          className={`skills_block_7 ${
            this.state.visibleSections.skills_block_7 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_7}
          data-section="skills_block_7">
          <div className="skills_block_section">
            <img className="skills_block_img" src={imageReact} />
            <h4 className="skills_block_title">React (React Native)</h4>
          </div>
          <p className="skills_block_text">
            Reusable component-based architecture. Created responsive UIs and
            mobile apps with React Native, Redux, and React Query.
          </p>
        </div>
        <div
          className={`skills_block_8 ${
            this.state.visibleSections.skills_block_8 ? 'show' : ''
          }`}
          ref={this.sectionsRefs.skills_block_8}
          data-section="skills_block_8">
          <img className="skills_block_img" src={imageAngular} />
          <h4 className="skills_block_title">Angular</h4>
          <p className="skills_block_text">
            Built complex SPAs with RxJS, NgRx, and TypeScript. Focused on
            modular structure and scalable enterprise apps.
          </p>
        </div>
      </div>
    )
  }

  footerData() {
    return (
      <footer className="footer_data about_footer_data">
        Copyright &copy; 2024 Portfolify. All rights reserved.
      </footer>
    )
  }

  render() {
    return (
      <main>
        {this.structureContent()}
        {this.statistic()}
        <div className="section"></div>
        {this.knowledge()}
        {this.skills()}
        {this.footerData()}
      </main>
    )
  }
}

export default About

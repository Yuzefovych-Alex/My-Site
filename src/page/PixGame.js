import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/css/pixgame.css'
import imagePixGame from '../images/ChatGPT Image 9 июн. 2025 г., 14_44_24 (1).png'

class PixGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleSections: {
        page_block: true,
      },
    }
    this.sectionsRefs = {
      page_block: createRef(),
    }
  }

  headerPage() {
    return (
      <div
        className={`page_block ${
          this.state.visibleSections.page_block ? 'show' : ''
        }`}
        ref={this.sectionsRefs.page_block}
        data-section="page_block">
        <h3 className="page_block_title">PixGame</h3>
        <p className="page_block_text">
          PixGame is an innovative platform designed for gamers who are looking
          for the best deals on their favorite titles. <br />
          We help users discover games at the lowest possible prices from
          various sources, ensuring they never overpay for their passion.
        </p>
      </div>
    )
  }

  characteristicsBlock() {
    return (
      <div className="characteristicsBlock">
        <ul className="characteristicsBlock_list">
          <li className="characteristicsBlock_list_item">
            <h4>Client:</h4>
            <h2 className="characteristicsBlock_list_item_h2">
              Pix Corporation
            </h2>
          </li>
          <li className="characteristicsBlock_list_item">
            <h4>Services:</h4>
            <h2 className="characteristicsBlock_list_item_h2">
              Web Development
            </h2>
          </li>
          <li className="characteristicsBlock_list_item">
            <h4>Technologies:</h4>
            <h2 className="characteristicsBlock_list_item_h2">React JS</h2>
          </li>
          <li className="characteristicsBlock_list_item">
            <h4>Technologies:</h4>
            <h2 className="characteristicsBlock_list_item_h2">Next JS</h2>
          </li>
        </ul>
      </div>
    )
  }

  dataBlock() {
    return (
      <div className="dataBlock">
        <div className="dataBlock_img">
          <img
            src={imagePixGame}
            alt="Pix Game"
            className="dataBlock_img_photo"
          />
        </div>
      </div>
    )
  }

  detailsBlock() {
    return (
      <div className="detailsBlock">
        <p className="detailsBlock_text">
          But PixGame is more than just a place to find cheap games — it's a
          growing community where users can offer and sell a wide range of
          game-related services. Whether it's in-game items, professional
          coaching, account setups, or content creation, PixGame empowers gamers
          to share their skills and earn from what they love.
        </p>
        <h2 className="detailsBlock_title_one">Project Requirements</h2>
        <ul className="mainBlock_list">
          <li className="mainBlock_list_item">
            PixGame must aggregate game prices from multiple sources to ensure
            users find the best deals.
          </li>
          <li className="mainBlock_list_item">
            The platform should allow users to list and offer gaming-related
            services such as in-game items, coaching, account setups, and
            content creation.
          </li>
          <li className="mainBlock_list_item">
            The system must support community-building features, encouraging
            interaction and user engagement within the platform.
          </li>
        </ul>
      </div>
    )
  }

  projectOverview() {
    return (
      <>
        <h1 className="detailsBlock_title">Project Overview</h1>
        <p className="detailsBlock_text_text">
          PixGame is an innovative platform tailored for gamers who seek the
          best prices on their favorite games. By aggregating data from various
          sources, PixGame ensures that users never overpay, making it a go-to
          destination for savvy gamers.
          <br />
          <br /> Beyond just deals, PixGame fosters a vibrant community where
          users can offer and purchase a broad spectrum of game-related services
          — from in-game item trading to professional coaching and content
          creation. This dual focus on affordability and community makes PixGame
          a unique, empowering platform in the gaming ecosystem.
        </p>
      </>
    )
  }

  theChalenge() {
    return (
      <>
        <h1 className="detailsBlock_title">The Challenge</h1>
        <p className="detailsBlock_text_text">
          Developing PixGame posed several key challenges:
          <br />
          <br />
        </p>
        <ul className="detailsBlock_list">
          <li className="detailsBlock_list_item">
            Price Aggregation: Integrating with diverse APIs and parsing pricing
            data accurately from multiple platforms was complex and required a
            dynamic, scalable approach.
          </li>
          <li className="detailsBlock_list_item">
            User Trust & Safety: Creating a secure marketplace for services such
            as coaching or item trading involved robust verification and
            moderation systems to protect users.
          </li>
          <li className="detailsBlock_list_item">
            Community Engagement: Encouraging organic growth of the community
            necessitated thoughtful UX design and incentive systems to keep
            users engaged and participating.
          </li>
        </ul>
        <br />
        <p className="detailsBlock_text_text">
          Despite these challenges, the team overcame technical hurdles through
          modular architecture, implemented strict security protocols, and
          developed community-focused features that drive continued user
          interest and trust.
        </p>
      </>
    )
  }

  mainBlock() {
    return (
      <div className="mainBlock">
        <div className="mainBlock_one">{this.characteristicsBlock()}</div>
        <div className="mainBlock_two">
          {this.dataBlock()}
          <div className="edit_text">
            {this.detailsBlock()}
            {this.projectOverview()}
            {this.theChalenge()}
          </div>
        </div>
      </div>
    )
  }

  footerData() {
    return (
      <footer className="footer_data contact_footer_data">
        Copyright &copy; 2024 Portfolify. All rights reserved.
      </footer>
    )
  }

  render() {
    return (
      <main>
        {this.headerPage()}
        <div className="section"></div>
        {this.mainBlock()}
        <div className="footer_size">{this.footerData()}</div>
      </main>
    )
  }
}

export default PixGame
